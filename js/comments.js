function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
// loadComments();

const displayComments = comments => {
    // console.log(comments);
    const commentSection = document.getElementById('comments');
    // for(const comment of comments){
        comments.forEach(comment => {
        // console.log(comment);
        const div = document.createElement('div');
        div.style.backgroundColor = 'skyblue';
        div.style.padding = '10px';
        div.style.margin = '10px';
        div.style.borderRadius = '10px';
        div.innerHTML = `
            <h3>Name: ${comment.name}</h3>
            <small>Comment: ${comment.body}</small>
            <br>
            <button onclick="searchById('${comment.id}')">See More Details</button>
        `;
        commentSection.appendChild(div);
    })
}

const searchById = id => {
    // console.log(id);
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data))
}

const displayDetails = details => {
    const detailsDiv = document.getElementById('comment-details');
    detailsDiv.innerHTML = `
        <h3>Name: ${details.name}</h3>
        <p>Id: ${details.id}</p>
        <p>Gmail: ${details.email}</p>
        <p>Comment: ${details.body}</p>
    `;

}