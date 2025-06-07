import {places} from '../data/places.mjs'
console.log(places);


const showHere = document.querySelector("#allplaces")


function displayItems(places){
    places.forEach(x => {
        //build the card element
        const thecard = document.createElement('div')
        //build photo element
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.url}`
        thephoto.alt = x.name
        thecard.appendChild(thephoto)
        
        const thetitle = document.createElement('h2')
        thetitle.innerHTML = x.name
        thecard.appendChild(thetitle)
        
        const theaddress = document.createElement('address')
        theaddress.innerHTML = x.address
        thecard.appendChild(theaddress)
        
        const thedesc = document.createElement('p')
        thedesc.innerHTML = x.description
        thecard.appendChild(thedesc)
        
        const button = document.createElement('button')
        button.textContent = 'LEARN MORE'
        button.classList.add('learn-more-btn');
        button.addEventListener('click', ()=>{
            alert(`Hello there, this is a nice place even to visit. We will add more information about ${x.name} in the future.`);
        });
        thecard.appendChild(button);
        
        showHere.appendChild(thecard)
    })
}

displayItems(places)

function visitas() {
    let visit = localStorage.getItem('visit');

    if (visit === null){
        alert(`Welcome! Let us know if you have any questions.`);
        visit = 1;
    }
    else{
        visit = parseInt(visit) + 1;
        alert(`This is your visit number ${visit}. Back so soon! Awesome!`);
    }

    localStorage.setItem('visit', visit);


}

window.onload = visitas;

