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

        const theaddress = document.createElement('h2')
        theaddress.innerHTML = x.theaddress
        thecard.appendChild(theaddress)

        const thedesc = document.createElement('p')
        thedesc.innerHTML = x.description
        thecard.appendChild(thedesc)


        showHere.appendChild(thecard)
    })
}

displayItems(places)