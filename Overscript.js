var heroes = [
	'D.Va',
	'Orisa',
	'Reinhardt',
	'Roadhog',
	'Winston',
	'Wrecking Ball',
	'Zarya',
	'Bastion',
	'Doomfist',
	'Genji',
	'Hanzo',
	'Junkrat',
	'McCree',
	'Mei',
	'Pharah',
	'Reaper',
	'Soldier 76',
	'Sombra',
	'Symmetra',
	'Torbjorn',
	'Tracer',
	'Widowmaker',
	'Ana',
	'Brigitte',
	'Lucio',
	'Mercy',
	'Moira',
	'Zenyatta'
]
function newHero(){
	var randomNumber=Math.floor(Math.random()* (heroes.length));
	document.getElementById('heroDisplay').innerHTML=heroes[randomNumber];
}