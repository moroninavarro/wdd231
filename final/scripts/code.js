import {apartments} from '../data/apartments.mjs'
console.log(apartments);


const showHere = document.querySelector("#allapartments")


function displayItems(apartments){
    apartments.forEach(x => {
        //build the card element
        const thecard = document.createElement('div')
        //build photo element

        
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.url}`
        thephoto.alt = x.name
        thephoto.loading = 'lazy';
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
        
        const theprice = document.createElement('h3')
        theprice.innerHTML = x.price
        thecard.appendChild(theprice)
        
        showHere.appendChild(thecard)
    })
}

displayItems(apartments)
