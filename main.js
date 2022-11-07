function createGame(timeA,timeB, time){
return `
    <li>
        <img src="images/${timeA}.svg" alt=""> 
        <strong>${time} </strong> 
        <img src="images/${timeB}.svg" alt="">
    </li>
`
}

function createCard(date, day, games){
return `
<div class="card">
    <h2 class="date"><span>${date}</span> ${day}</h2>
    <ul>
        ${games}
    </ul>
</div>
`
}

document.querySelector('.sectionCards').innerHTML = 
createCard("24/10", "QUINTA", 
    createGame("switzerland", "brazil", "10:00") +
    createGame("uruguay", "portugal", "15:00")
) +
createCard("28/10", "SEGUNDA",
    createGame("switzerland", "cameroon", "24:00") +
    createGame("uruguay", "portugal", "18:00") + 
    createGame("serbia", "south", "18:00")
 )
