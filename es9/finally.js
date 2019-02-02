// finally

const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]


Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
}))
  .then(results => {
  	throw Error;
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
	console.log(results[3])
})
  .catch(() => console.log('errrrorrr'))
  .finally(() => console.log('extra'));