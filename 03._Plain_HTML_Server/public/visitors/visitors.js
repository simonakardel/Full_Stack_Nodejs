

fetch('/api/visitors')
.then(res => res.json())
.then(data => {
    updateVisitorCount(data.data);

});

function updateVisitorCount(visitorCount){
    const visitorsDiv = document.getElementById('visitor-count');
    visitorsDiv.innerText = visitorCount;
}

function writeInVisitorLog(){
    fetch('/api/visitors', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json())
    .then(data => updateVisitorCount(data.data))
}