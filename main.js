// random dog generator function
const URL = 'https://dog.ceo/api/breeds/image/random'
const button = document.querySelector('#button')
button.addEventListener('click', () =>{
    fetch(URL)
    .then((data) => data.json())
    .then((response) => {
        console.log('look at the doggos')
        document.querySelector('#image').src = response.message
    })
    .catch((error) => console.log(error))
})