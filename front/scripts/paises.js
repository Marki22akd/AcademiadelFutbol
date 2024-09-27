const paises = []

fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(response => {
    for(let key in response){
      paises.push(response[key])
    }
  }).catch(err => console.error(err));