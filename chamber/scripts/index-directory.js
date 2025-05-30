
const display = document.querySelector("#companies")


const displayCompanies = (companies) =>{
    const cards = document.querySelector('#companies');
    cards.innerHTML = "";

    const filtered = companies.filter(company =>
        company.membershipLevel === 2 || company.membershipLevel === 3
    );

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);


    selected.forEach((companie) =>{
        
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let portrait = document.createElement('img');
        let url = document.createElement('a');
        let level = document.createElement('p');
        


        fullName.textContent = companie.name;
        address.textContent = `${companie.address.street}, ${companie.address.city}, ${companie.address.state}, ${companie.address.country}, ${companie.address.zip} `;
        phoneNumber.textContent = `Phone number: ${companie.phoneNumber}`;
        url.setAttribute('href', companie.url);
        url.setAttribute('target', '_blank');
        url.textContent = "Details";
        level.textContent = `Membership Level: ${companie.membershipLevel}`;
        portrait.setAttribute('src', companie.imageurl);
        portrait.setAttribute('alt', `Portrait of ${companie.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(url);
        card.appendChild(level);
        card.appendChild(portrait);
        cards.appendChild(card);
        
    });
}


async function getCompanieData(){
    
    const response = await fetch('../chamber/data/members.json');
    const data = await response.json();
    
    displayCompanies(data.companies);
    
    
} 

getCompanieData();
