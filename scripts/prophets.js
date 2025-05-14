async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);


} 
getProphetData();

const displayProphets = (prophets) =>{
    prophets.forEach((prophet) =>{

    "prophets"[
      {
        "name": "Joseph",
        "lastname": "Smith",
        "birthdate": "23 December 1805",
        "death": "27 June 1844",
        "length": 14,
        "order": 1,
        "birthplace": "Vermont",
        "numofchildren": 11,
        "imageurl": "1429d0aa0eeec6e2c74851a4bf4235/nauvoo_temple_joseph_art_lds.jpeg"
      }
      ]
    });
}



const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');