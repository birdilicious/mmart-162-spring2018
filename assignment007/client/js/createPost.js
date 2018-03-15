const createPost = () => {
    const data = {
        name: document.querySelector('#name').value,
        imageURL: document.querySelector('#imageURL').value,
        url: document.querySelector('#url').value,
        text: document.querySelector('#text').value
    } // the user input data
    console.log('Saving the following object to the server:', data);

    fetch('http://localhost:3000/posts/', //takes the user input data and fetches localhost to send that data to the server
    {
        method: 'POST', // issues a post command
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        document.querySelector('#name').value = ''
        document.querySelector('#url').value = ''
        document.querySelector('#imageURL').value = ''
        document.querySelector('#text').value = ''
        document.querySelector('.modal').classList.toggle('show')
        getPosts()
    })
}

document.querySelector('.button-primary').onclick = createPost

//This file fetches the server02
