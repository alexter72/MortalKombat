const player1 = {
	name: 'Scorpion',
	hp: 60,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['knife', 'АК-47'],
	attack: function () {
		console.log(player1.name + 'Fight...');
	}
}

const player2 = {
	name: 'Zub-Zero',
	hp: 80,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['knife', 'АК-47'],
	attack: function () {
		console.log(player2.name + 'Fight...');
	}
}

function createPlayer(classPlayer, propertiesPlayer) {
	const $arenas = document.querySelector('.arenas');

	const $player = document.createElement('div');
	$player.classList.add(classPlayer);

	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');

	const $character = document.createElement('div');
	$character.classList.add('character');

	const $life = document.createElement('div');
	$life.classList.add('life');
	$life.style.width = propertiesPlayer.hp;

	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = propertiesPlayer.name;

	const $img = document.createElement('img');
	$img.classList.add('img');
	$img.src = propertiesPlayer.img;

	$player.appendChild($progressbar);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	$player.appendChild($character);
	$character.appendChild($img);

	$arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);


