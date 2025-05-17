async function getCompanieData(){
    
    const response = await fetch('../data/members.json');
    const data = await response.json();
    
    displayCompanies(data.companies);
    
    
} 

getCompanieData();



const displayCompanies = (companies) =>{
    const cards = document.querySelector('#cards');
    companies.forEach((companie) =>{
        
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let portrait = document.createElement('img');
        
        fullName.textContent = companie.name;
        address.textContent = `${companie.address.street},${companie.address.city} `;
        
        phoneNumber.textContent = companie.phoneNumber;
        portrait.setAttribute('src', companie.imageurl);
        portrait.setAttribute('alt', `Portrait of ${companie.name} ${companie.address}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(portrait);
        cards.appendChild(card);
        
    });
}




