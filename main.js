const player1 = {
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['knife', 'АК-47'],
	attack: function () {
		console.log(player1.name + 'Fight...');
	}
}

const player2 = {
	player: 2,
	name: 'Zub-Zero',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['knife', 'АК-47'],
	attack: function () {
		console.log(player2.name + 'Fight...');
	}
}

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

function createElement(tag, className) {
	const $tag = document.createElement(tag);

	if (className) {
		$tag.classList.add(className);
	}

	return $tag;
}

function createPlayer(propertiesPlayer) {

	const $player = createElement('div', 'player' + propertiesPlayer.player);
	const $progressbar = createElement('div', 'progressbar');
	const $character = createElement('div', 'character');
	const $life = createElement('div', 'life');
	$life.style.width = propertiesPlayer.hp + '%';

	const $name = createElement('div', 'name');
	$name.innerText = propertiesPlayer.name;

	const $img = createElement('img');
	$img.src = propertiesPlayer.img;

	$player.appendChild($progressbar);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	$player.appendChild($character);
	$character.appendChild($img);

	return $player;
}

function changeHp(player) {
	const $playerLife = document.querySelector('.player' + player.player + ' .life');

	player.hp -= randomNumber();
	$playerLife.style.width = player.hp + '%';

	if (player.hp <= 0) {
		player.hp = 0;
	}
}

function randomNumber() {
	const randomNumber = Math.random() * 20;
	return randomNumber;
}

randomNumber();

function playerLose(name) {
	const $loseTitle = createElement('div', 'loseTitle');

	$loseTitle.innerText = name + ' win';
	return $loseTitle;

}

$randomButton.addEventListener('click', function () {
	changeHp(player1);
	changeHp(player2);

	checkWinner(player1, player2);
})

function checkWinner(playerA, playerB) {
	if (playerA.hp === 0 && playerB.hp > 0) {
		$arenas.appendChild(playerLose(playerB.name));
		$randomButton.disabled = true;
	} else if (playerA.hp > 0 && playerB.hp === 0) {
		$arenas.appendChild(playerLose(playerA.name));
		$randomButton.disabled = true;
	} else if (playerA.hp === 0 && playerB.hp === 0) {
		$arenas.appendChild(playerLose('both not'));
		$randomButton.disabled = true;
	}
}


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));




