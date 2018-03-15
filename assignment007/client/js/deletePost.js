const deletePost = () => {
  fetch('http://localhost:3000/posts/0', //takes the user input data and fetches localhost to send that data to the server
  {
      method: 'DELETE', // issues a delete command
      headers: {"Content-Type": "application/json"}
  }).then(function(response) {
      getPosts()
  })
}
