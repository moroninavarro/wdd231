async function getCompanieData(){
    
    const response = await fetch('members.json');
    const data = await response.json();
    //console.table(data.prophets);
    displayCompanies(data.companies);
    
    
} 
getCompanieData();

