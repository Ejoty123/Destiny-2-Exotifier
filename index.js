import guns from './guns.json' assert { type: 'json' };

var rand = Math.floor(Math.random() * guns.length);
console.log (rand);
console.log (guns.length);
console.log(guns[rand]);
document.getElementById("itsthegun").innerHTML = (guns[rand].name);

//random button bullshit 

var button = document.createElement('input');
button.setAttribute('type', 'submit');
button.setAttribute('ID', 'btnSendMailClone');
button.setAttribute('value', 'Submit');
button.setAttribute('onclick', 'btnSendMail_Click()');
button.setAttribute('form', 'myform');
document.body.appendChild(button);
button.setAttribute("class", "btn btn-primary");