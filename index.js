document.addEventListener('DOMContentLoaded', function(){
    

    let pokemonElement = document.getElementById('movies-container')
    function renderPokemon (pokemon) {
        
            pokemonElement.innerHTML =  `
             <div class="card cardStyle">
                <div id ="giphy"></div>
                    <div class="card-body">
                      <h2 class="card-title">${pokemon.data.name}</h2>
                      <p class="card-title">Order: ${pokemon.data.order}</p>
                      <p class="card-title">${pokemon.data.species.name}</p>
                        <p class="card-title">Weight: ${pokemon.data.weight} lbs.</p>  
                       
                         </div>
                      </div>`
                 
          
                console.log(pokemon)
                return pokemonElement;
            
            }

    // This is the call to pokeapi via axios

        document.getElementById("search-form").addEventListener('submit', function (e){
            e.preventDefault();
           
            
            console.log(e)
            
                let form = e.target
                    let formValue = form[0].value
                        let urlEncodedSearchString = encodeURIComponent(formValue).toLowerCase()
                        
                            axios.get("https://pokeapi.co/api/v2/pokemon/" + urlEncodedSearchString)
     // This is the call to giphyapi via jQuery
                             .then(function (response){
                             $.getJSON(`https://api.giphy.com/v1/gifs/search?q=${response.data.name}-pokemon&api_key=O6gYWlFjkxGXfXLfGAo201rGt0RZLZkQ`, function (gif) { 
                            console.log(gif.data[0].url)
                          console.log(gif)
                        let i = Math.floor(Math.random() * 10) + 0;
                    $("<img>",{"src": gif.data[i].images.downsized.url,"class":"card-img-top"}).appendTo($('#giphy'))
                   }) 
                let pokemonElement = renderPokemon(response)
             console.log(pokemonElement)
    // This capitalizes the first letter of the pokemon Name and Species
             let pokeName = document.getElementsByClassName("card-title");
             pokeName[0].textContent = pokeName[0].textContent.charAt(0).toUpperCase() + pokeName[0].textContent.slice(1)
              pokeName[2].textContent = "Species: "+ pokeName[2].textContent.charAt(0).toUpperCase() + pokeName[2].textContent.slice(1)
             console.log(pokeName[0].textContent)
             console.log(pokeName)
             console.log('xxxxxxx')
    // This catches any entry that is not a valid pokemon name or index number
          }).catch(function (error){
        alert ("That's not a pokemon bro!")
   
      })
    })
// This is the random pokemon button function
$('#random').click(randomPokemon)
    function randomPokemon () {
    let rando = Math.floor(Math.random() * 807) + 0;
     axios.get("https://pokeapi.co/api/v2/pokemon/" + rando)
     // This is the call to giphyapi via jQuery
                             .then(function (response){
                             $.getJSON(`https://api.giphy.com/v1/gifs/search?q=pokemon-${response.data.name}&api_key=O6gYWlFjkxGXfXLfGAo201rGt0RZLZkQ`, function (gif) { 
                            console.log(gif.data[0].url)
                          console.log(gif)
                        let i = Math.floor(Math.random() * 10) + 0;
                    $("<img>",{"src": gif.data[i].images.downsized.url,"class":"card-img-top"}).appendTo($('#giphy'))
                   }) 
                let pokemonElement = renderPokemon(response)
             console.log(pokemonElement)
    // This capitalizes the first letter of the pokemon Name and Species
             let pokeName = document.getElementsByClassName("card-title");
             pokeName[0].textContent = pokeName[0].textContent.charAt(0).toUpperCase() + pokeName[0].textContent.slice(1)
              pokeName[2].textContent = "Species: "+ pokeName[2].textContent.charAt(0).toUpperCase() + pokeName[2].textContent.slice(1)
             console.log(pokeName[0].textContent)
             console.log(pokeName)
             console.log('xxxxxxx')
 
      })
    }



})
            
          

   