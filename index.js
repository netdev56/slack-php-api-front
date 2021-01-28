if(!localStorage.getItem('token')){
console.log("hello")

fetch('https://slack-php-api-token.herokuapp.com')
    .then(response => response.json())
    .then(data =>{
        localStorage.setItem('token', data.token);
        // console.log(data.token)
    });
}



document.getElementById('submit').addEventListener('click', () => {

    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let txt = ` ${email}\n ${message}`;

    let auth = `Bearer ${localStorage.getItem('token')}`;
    
    fetch('https://slack.com/api/chat.postMessage', {
        method: 'POST',
        headers: new Headers({
            'Content-type': 'application/json',
            'Authorization': auth 
        }),
        body: JSON.stringify({channel:"C01KYCP7N06",text:txt})
    
    });


    
    });
