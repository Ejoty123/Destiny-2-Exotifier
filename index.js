import guns from './guns.json' assert { type: 'json' };

var rand = Math.floor(Math.random() * guns.length);
console.log (`the random number was ${rand}`);
console.log (`there are ${guns.length} guns in the database`);
console.log(`the gun random was ${JSON.stringify(guns[rand].name)} `);

document.getElementById("itsthegun").innerHTML = (guns[rand].name);

//random button bullshit 

/* var button = document.createElement('input');
button.setAttribute('type', 'submit');
button.setAttribute('ID', 'btnSendMailClone');
button.setAttribute('value', 'Submit');
button.setAttribute('onclick', 'btnSendMail_Click()');
button.setAttribute('form', 'myform');
document.body.appendChild(button);
button.setAttribute("class", "btn btn-primary"); */

// it worked gadzooks, gotta run a function of this sort to generate x random buttons?

document.getElementById ("buttoncreator").addEventListener ("click", buttonator);

var buttonnumber = 0;

function buttonator() {
  console.log(`yes please create a button`);
  buttonnumber++;
  console.log(`creating button number ${buttonnumber}`);
  document.getElementById("table").innerHTML +=
            `<span id="${buttonnumber}">Mock Button#${buttonnumber}</span>`;
}

document.addEventListener('click', function(e) {
    var player = e.target.id;
    console.log(`player id is ${player}`);
    if (isNaN(player)){
        return;
    }
    console.log(`generating gun for player ${player}` );
    console.log(`${player}'s gun is ${JSON.stringify(guns[rand].name)}, which is on row${JSON.stringify(guns[rand].row)} column ${JSON.stringify(guns[rand].column)}`)
    document.getElementById(${player}).setAttribute('value', 'Submit');
}, false);