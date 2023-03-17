const tanks = document.getElementById('tanks-wrapper');
const url = '/api/tanks/'
const output = '';

// when you do DOM manipulation always use forEach
// do not use innerHTML 
// response is byte stream - readable stream

fetch(url)
.then((res) => res.json())
.then((data) => {

    data.data.forEach(tank => {
       const tankDiv = document.createElement('div');

       const tankName = document.createElement('p');
       tankName.innerText = tank.name;

       tankDiv.appendChild(tankName);
       tanks.appendChild(tankDiv);
    });
     
    });



