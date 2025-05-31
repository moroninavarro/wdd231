const myInfo = new URLSearchParams(window.location.search);


// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('title'));
// console.log(myInfo.get('email'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('organization'));
// console.log(myInfo.get('description'));

document.querySelector('#results').innerHTML = `
<p>Thank you for join us ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>We received your information ${myInfo.get('email')}, ${myInfo.get('phone')}</p>
<p>Name of your business: ${myInfo.get('organization')}</p>
`