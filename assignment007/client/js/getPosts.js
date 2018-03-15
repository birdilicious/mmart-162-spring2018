//1. define functions:
const getPosts = () => {
    container.innerHTML = ''
    fetch('http://localhost:3000/posts/').then(response =>{
        return response.json();
      }).then(showPosts)
} // fetches localhost to send index.html to server

const showPosts = (posts) => {
    console.log(posts)
    const container = document.getElementById('container')
    posts.forEach(post => {
        let template = `
              <h2>${post.name}</h2>
              <br><a href="${post.url}">More</a>
              <br><img src="${post.imageURL}" />
              <br><button class="button-primary" onclick="deletePost()">Delete</button> 
              <p>${post.text}</p>
              <div class="comments">
                    <h3>Comments</h3>
                    <p>TODO next week...</p>
              </div>`
        container.innerHTML += template;
    })
}
getPosts()
