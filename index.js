
let storeArray = []

let blogEl = document.getElementById('blog-list')
let sendForm = document.getElementById('new-post')



function renderArray(){
	let html = "";

			for(let post of storeArray){

				html+= 

				`

				<div class="blog-container">
		                <h1>${post.title}</h1>
		                <hr>
		                 <p>${post.body}</p>
		        </div>

			`
			blogEl.innerHTML = html
}}




	fetch('https://apis.scrimba.com/jsonplaceholder/posts')
	.then(response => response.json())
	.then(data => {
	storeArray = data.slice(0,5)
		console.log(storeArray)

		renderArray()
	
			
		})
	


sendForm.addEventListener('submit' , function(e){
	e.preventDefault()
	getNewBlog()
})


function getNewBlog(){
	
	let postTitle = document.getElementById('post-title').value
	let postBody = document.getElementById('post-body').value

	const data = {
		title : postTitle,
		body: postBody
	}
	const options = {
		method : "POST",
		body : JSON.stringify(data),
		headers: {
            "Content-Type": "application/json"
        }

	}

	fetch('https://apis.scrimba.com/jsonplaceholder/posts' , options)
	.then(response => response.json())
	.then(data=>{
		storeArray.unshift(data)
		renderArray()

		
	})
}


	

	

