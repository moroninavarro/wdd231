import {apartments} from '../data/apartments.mjs'
console.log(apartments);


const showHere = document.querySelector("#allapartments")

const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeBtn = document.getElementById('modalCloseBtn');



function displayItems(apartments){
    apartments.forEach(x => {
       
        const thecard = document.createElement('div')
        

        
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
        
    
        const button = document.createElement('button')
        button.textContent = 'LEARN MORE'
        button.classList.add('learn-more-btn');
        button.addEventListener('click', ()=>{
            openModal(`Apartment ${x.name} Description`);
        });
        thecard.appendChild(button);
        
        showHere.appendChild(thecard)
    })
}

displayItems(apartments)


function openModal(title, text){
    modalTitle.textContent = title;
    modalText.textContent = text;
    modal.style.display = 'block';
}



closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
});


