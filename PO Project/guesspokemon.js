document.addEventListener('DOMContentLoaded', function() {
  const pokemonElement = document.getElementById('pokemon-container')
  function renderPokemon(pokemon) {
    const i = Math.floor(Math.random() * 10) + 0
    pokemonElement.innerHTML = `
           <div class="card cardStyle test"style="width: 35rem;">
              <div id ="giphy"></div>
           </div>

              <div class="card-body card cardStyle space d-flex flex-row" >
                  <div class="d-flex flex-column test">
                    <h1 class="card-title"style=color:red>${pokemon.data.name}</h1>
                    <h2 class="card-title"style=color:navy>#${pokemon.data.id}</h2>
                    <strong class="card-title">${pokemon.data.species.name}</strong>
                    <p class="card-title"><strong>Order: ${pokemon.data.order}</strong></p>
                    <strong class="card-title">${pokemon.data.types[0].type.name}</strong>
                    <p class="card-title"><strong>Weight: ${pokemon.data.weight} lbs.</strong></p>
                    <p class="card-title"><strong>Height: ${pokemon.data.height}ft</strong></p>
                    <strong class="card-title">${pokemon.data.moves[i].move.name}</strong>
                    <p class="card-title"><strong>Base Experience: ${pokemon.data.base_experience}</strong></p>
                  </div>
                    <div class="d-flex flex-column pokeImage">
                      <img class=pokeImage src="${pokemon.data.sprites.front_default}">
                    </div>
               </div>
                  `

    return pokemonElement
  }

  // This is the call to pokeapi via axios

  document
    .getElementById('search-form')
    .addEventListener('submit', function(e) {
      e.preventDefault()
      const form = e.target
      const formValue = form[0].value
      const urlEncodedSearchString = encodeURIComponent(formValue).toLowerCase()
      axios
        .get('https://pokeapi.co/api/v2/pokemon/' + urlEncodedSearchString)
        // This is the call to giphyapi via jQuery
        .then(function(response) {
          $.getJSON(
            `https://api.giphy.com/v1/gifs/search?q=${response.data.name}-pokemon&api_key=O6gYWlFjkxGXfXLfGAo201rGt0RZLZkQ`,
            function(gif) {
              const i = Math.floor(Math.random() * 25) + 0
              $('<img>', {
                'src': gif.data[i].images.downsized.url,
                'class': 'card-img-top'
              }).appendTo($('#giphy'))
            }
          )
          const pokemonElement = renderPokemon(response)

          // This capitalizes the results
          const pokeName = document.getElementsByClassName('card-title')
          pokeName[0].textContent = uppercase(pokeName[0].textContent)
          pokeName[2].textContent =
            'Species: ' +
            pokeName[2].textContent.charAt(0).toUpperCase() +
            pokeName[2].textContent.slice(1)
          pokeName[4].textContent =
            'Type: ' +
            pokeName[4].textContent.charAt(0).toUpperCase() +
            pokeName[4].textContent.slice(1)
          pokeName[7].textContent =
            'Move: ' + uppercase(pokeName[7].textContent)
          if (response.status === 200) {
            $('#pokemon-container').effect('slide', 1000)
          }
        })
        .catch(function(error) {
          alert("That's not a Pokémon bro!")
        })
    })

  // This is the random pokemon button function
  $('#random').click(randomPokemon)
  function randomPokemon() {
    const rando = Math.floor(Math.random() * 807) + 1

    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + rando)
      // This is the call to giphyapi via jQuery
      .then(function(response) {
        $.getJSON(
          `https://api.giphy.com/v1/gifs/search?q=pokemon-${response.data.name}&api_key=O6gYWlFjkxGXfXLfGAo201rGt0RZLZkQ`,
          function(gif) {
            const i = Math.floor(Math.random() * 25) + 0
            $('<img>', {
              'src': gif.data[i].images.downsized.url,
              'class': 'card-img-top'
            }).appendTo($('#giphy'))
          }
        )
        const pokemonElement = renderPokemon(response)

        // This capitalizes the results
        const pokeName = document.getElementsByClassName('card-title')
        pokeName[0].textContent = uppercase(pokeName[0].textContent)
        pokeName[2].textContent =
          'Species: ' +
          pokeName[2].textContent.charAt(0).toUpperCase() +
          pokeName[2].textContent.slice(1)
        pokeName[4].textContent =
          'Type: ' +
          pokeName[4].textContent.charAt(0).toUpperCase() +
          pokeName[4].textContent.slice(1)
        pokeName[7].textContent = 'Move: ' + uppercase(pokeName[7].textContent)
        // This is from jQuery UI
        if (response.status === 200) {
          $('#pokemon-container').effect('slide', 1000)
        }
      }).catch(function(error) {
       alert("uh-oh!")
      })
  }

  // This function removes '-' from result and capitalizes next word.
  function uppercase(move) {
    const pokeArr = move.split('-')
    const emptyArr = []
    for (let x = 0; x < pokeArr.length; x++) {
      emptyArr.push(pokeArr[x].charAt(0).toUpperCase() + pokeArr[x].slice(1))
    }
    return emptyArr.join(' ')
  }

  // This is a aboutPokemon button click event and will insert about pokemon between about pokemon and random pokemon buttons
  $('#show').click(function() {
    $('#show').css('display', 'none')
    $('#data').show()
    $('#hide').show()
    $('#data').html(
      '<div id="wikiPokemon">Pokémon, also known as Pocket Monsters in Japan, is a Japanese media franchise managed by the Pokémon Company, a company founded and with shares divided between Nintendo, Game Freak, and Creatures. The franchise copyright and Japanese trademark is shared by all three companies, but Nintendo is the sole owner of the trademark in other countries. The franchise was created by Satoshi Tajiri in 1995, and is centered on fictional creatures called "Pokémon", which humans, known as Pokémon Trainers, catch and train to battle each other for sport. The English slogan for the franchise is "Gotta Catch \'Em All". Works within the franchise are set in the Pokémon universe.</div>'
    )
  })

  $('#hide').click(function() {
    $('#hide').css('display', 'none')
    $('#data').hide()
    $('#show').show()
  })


})
