/** Array to store the posts **/
 
 let postsArray = []

 const URL = 'https://apis.scrimba.com/jsonplaceholder/posts'

 const postTitleEl = document.getElementById('post-title')
 const postBodyEl = document.getElementById('post-body')
 const submitbtn = document.getElementByClassName('post-btn')

 let blog = document.getElementById('blog-list')

 const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

submitbtn.addEventListener('submit', function(e){
	e.preventDefault()
	postTitle = postTitleEl.value
	postBody = postBodyEl.value 
})

 function getPosts(){

 	fetch(URL , options)
 	.then(response => response.json())
 	.then(data => {
 		let postsArray = data.slice(0,5)

 	})

 }

 function addNewPost(){
 	postsArray.unshift()
 }

 function renderPosts(){

 	blog.innerHTML = ''

 	for(let post of postsArray){
 		blog += `

 		<div class="blog-container">
                <h1>${post.title}</h1>
                <hr>
                 <p>${post.body}</p>
            </div>

 		`
 	}

 }