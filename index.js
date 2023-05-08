import guns from './guns.json' assert { type: 'json' };

var rand = (Math.random() * guns.length);
console.log (rand);
console.log (guns.length);
console.log(guns[rand]);