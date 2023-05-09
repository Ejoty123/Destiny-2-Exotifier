import guns from './guns.json' assert { type: 'json' };

document.getElementById ("buttoncreator").addEventListener ("click", buttonator);

var buttonnumber = 0;

function buttonator() {
  console.log(`yes please create a button`);
  buttonnumber++;
  console.log(`creating button number ${buttonnumber}`);
  document.getElementById("table").innerHTML +=
            `<figure><img id="image${buttonnumber}" class="imagecontainer" src="https://www.bungie.net/common/destiny2_content/icons/0f3e38e82bac5e8c78d1a47be53341e0.jpg" alt="placeholder weapon"><div class="description"><figcaption class="gunname" id="${buttonnumber}">PLAYER ${buttonnumber}</figcaption></div>`;
}

document.addEventListener('click', function(e) {
    var rand = Math.floor(Math.random() * guns.length);
    console.log (`there are ${guns.length} guns in the database`);
    console.log(`the gun random was ${JSON.stringify(guns[rand].name)} `);

    var player = e.target.id;
    console.log(`player id is ${player}`);
    if (isNaN(player)){
        console.log(`${player} is not a number`);
        return;
    }
    console.log(`generating gun for player ${player}`);
    console.log(`${player}'s gun is ${JSON.stringify(guns[rand].name)}`);
    document.getElementById(player).textContent=`${guns[rand].name}`;
    document.getElementById(`image${player}`).src = `${guns[rand].image}`
}, false);