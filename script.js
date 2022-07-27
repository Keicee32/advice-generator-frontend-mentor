'use strict'

let adviceContainer = document.querySelector('.adviceContainer')
let apiID = document.querySelector('.apiID')
let dice = document.querySelector('.dice-image')

window.addEventListener('load', () => {
    getAPI()
    .then(data => {
        apiID.textContent = data.slip.id
        adviceContainer.textContent = `"${data.slip.advice}"`
    })
    .catch(err => console.log(err))
})

async function getAPI() {
    let response = await fetch('https://api.adviceslip.com/advice')


    let data = await response.json()

    

    // apiID.textContent = data.slip.id
    // adviceContainer.textContent = `"${data.slip.advice}"`

    return data
    // localStorageData(data.slip.advice)
   
}


dice.addEventListener('click', () => {
    getAPI()
    .then(data => {
        apiID.textContent = data.slip.id 
        adviceContainer.textContent = `"${data.slip.advice}"`
    })
    .catch(err => console.log(err))
})


let localStorageData = () => {
    getAPI()
    .then((data, str) =>{
        str = `"${data.slip.advice}"`
        localStorage.setItem('data', str)
        console.log(str)
    })
    .catch(err => console.log(err))
}

setInterval(localStorageData, 60000)
