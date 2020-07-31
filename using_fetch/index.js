/*
    project name: using_fetch
    purpose: Working using fetch to retrieve data from an external API
    author: joeldevel
    date: July 2020
    usage: Open the index.html file in a web browser. Open the console
           in case you want to log each step.
*/
// How to work with jsonplaceholder API
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// post data from API: userID, id, title, body

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

// Here we are going to insert the posts from the API
const container = document.querySelector('.container');


async function getPosts() {
    let response = await fetch( baseUrl );
    let posts = await response.json();
    return posts;
}

getPosts().then( posts => {
    let postsCollection = posts.map( post => {
        return postsHTML( post );
    }).join('');
    // put the posts in the HTML container
    container.innerHTML = postsCollection;
})

// Receives a post object and return a string
// ready to be inserted as content into  some HTML container
function postsHTML( post ){
  return `<div class="post">
    <h1 clas="post-title">${ limitText( post.title, 30 ) }</h1>
    <p class="post-body">${ limitText( post.body, 50 ) }</p>
  </div>`;
}
// Limits the text's length
const limitText = ( text, limit ) => {
  return text.length > limit ? text.slice( 0, limit ) : text;
}
