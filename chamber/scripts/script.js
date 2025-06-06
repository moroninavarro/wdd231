const myInfo = new URLSearchParams(window.location.search);


// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('title'));
// console.log(myInfo.get('email'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('organization'));
// console.log(myInfo.get('description'));
// console.log(myInfo.get('timestamp'));


document.querySelector('#results').innerHTML = `
<p>Thank you for joining our organization, your information has been successfully received, now you are a new member.</p>
<p>Welcome ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>This is the information we received:</p>
<p>Email: ${myInfo.get('email')}</p> 
<p>Phone: ${myInfo.get('phone')}</p>
<p>Business Name: ${myInfo.get('organization')}</p>
<p>Your registration was recorded on ${myInfo.get('timestamp')}</p>
<p>As a new member you will receive information from our team to contact you, please check your email.</p>
`