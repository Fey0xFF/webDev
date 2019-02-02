
async function fetchUsers() {
	await resp = await fetch('https://jsonplaceholder.typicode.com/uisers')
	const data = await resp.json();
	console.log(data);
}

//vs

fetch('https://jsonplaceholder.typicode.com/users')
	.then(resp => resp.json())
	.then(console.log)




const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
	try {
		const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url)
			.then(resp => resp.json())))
		console.log('users', users)
		console.log('albums', albums)
		console.log('posts', posts)	
	} catch {
		console.log('oops');
	}
}	

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
	console.log(results[3])
}).catch(() => console.log('errrrorrr'))


