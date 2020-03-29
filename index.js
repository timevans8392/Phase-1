document.addEventListener('DOMContentLoaded', function(){
    

    let pokemonElement = document.getElementById('movies-container')
    function renderPokemon (pokemon) {
        
            pokemonElement.innerHTML =  `
             <div class="card cardStyle">
                <div id ="giphy"></div>
                    <div class="card-body">
                      <h2 class="card-title">${pokemon.data.name}</h2>
                        <p class="card-text">Weight: ${pokemon.data.weight} lbs.</p>  
                       
                         </div>
                      </div>`
                 
          
                console.log(pokemon)
                return pokemonElement;
            
            }

    // This is the call to pokeapi via axios

        document.getElementById("search-form").addEventListener('submit', function (e){
            e.preventDefault();
            if (e === undefined){
                return alert ("Choose your Pokémon!")
            }
            console.log(e)
                let form = e.target;
                    let formValue = form[0].value
                        let urlEncodedSearchString = encodeURIComponent(formValue)
                            axios.get("https://pokeapi.co/api/v2/pokemon/" + urlEncodedSearchString)
     // This is the call to giphyapi via jQuery
                             .then(function (response){
                             $.getJSON("http://api.giphy.com/v1/gifs/search?q=" + response.data.name + "&api_key=O6gYWlFjkxGXfXLfGAo201rGt0RZLZkQ", function (gif) { 
                            console.log(gif.data[0].url)
                          console.log(gif)
                        let i = Math.floor(Math.random() * 25) + 0;
                    $("<img>",{"src": gif.data[i].images.downsized.url,"class":"card-img-top"}).appendTo($('#giphy'))
                   }) 
                let pokemonElement = renderPokemon(response)
             console.log(pokemonElement)
    // This capitalizes the first letter of the pokemon Name
             let pokeName = document.getElementsByClassName("card-title");
             pokeName[0].textContent = pokeName[0].textContent.charAt(0).toUpperCase() + pokeName[0].textContent.slice(1)
             console.log(pokeName[0].textContent)
    // This catches any entry that is not a valid pokemon name or index number
          }).catch(function (error){
        alert ("That's not a pokemon bro!")
   
      })
    })










            })
            
          

   