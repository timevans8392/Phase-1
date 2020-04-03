// $(document).ready(function () {
//     $("button").click(function clickEvent () {
//         $.getJSON("https://pokeapi.co/api/v2/pokemon/", function getData (result) {
//             console.log("Your data is here")
//             $(result).each(function(i, pokemon) {
                
//             })
            
//         })
//     })
// })

// $(document).ready(function () {
//     $("button").click(function clickEvent (result) {

//     })
// })

// $(document).ready(function pokemonImage () {
//     $('#firstButton').click(function clickEvent (data) {
//         $.getJSON(`https://pokeapi.co/api/v2/pokemon/${
//             (Math.floor(Math.random()*807)+1)
//         }`,
//         function (result) {
//             console.dir(result)
//             const theImageURL = result.sprites.front_default
//             $('#pokemonHere').html(`<h1>${result.name}</h1><img src="${theImageURL}">`)
//         }
//         )
//     })
// })

// $(document).ready(function pokemonHeightWeightFn () {
//     $('#secondButton').click(function clickEvent (data) {
//         console.log("I'm just checking")
//         $.getJSON(`https://pokeapi.co/api/v2/pokemon/${
//             Math.floor(Math.random()*889+1)
//         }`, function (result) {
//             console.log(result)
//             $('#pokemonHeightWeight').html(`<p>${result.height}</p> + `)
//         })
//     })
// })

$(document).ready(function () {
    $('button').click(function clickEvt (Evt) {
        console.log("Button has clicked!")
        var number = 1
        number++
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/${
            Math.floor(Math.random()*963+1)
        }`, function clickResult (result) {
            console.log(result)
            const image = result.sprites.front_default
            $('.rowClass').html(`<p>1</p>`)
            $('.image').html(`<img src="${image}">`)
            $('.name').html(`<td>${result.name}</td>`)
            $('.height').html(`<td>${result.height} ft </td>`)
            $('.weight').html(`<td>${result.weight} Ib </td>`)

        }    
        )
    }
    )
    document.getElementById("aboutContent").innerHTML = `<div class="wikiPokemon">Pokemon, also known as Pocket Monsters in Japan, is a Japanese media franchise managed by the Pokemon Company, a company founded and with shares divided between Nintendo, Game Freak, and Creatures. The franchise copyright and Japanese trademark is shared by all three companies, but Nintendo is the sole owner of the trademark in other countries. The franchise was created by Satoshi Tajiri in 1995, and is centered on fictional creatures called "Pokemon", which humans, known as Pokemon Trainers, catch and train to battle each other for sport. The English slogan for the franchise is "Gotta Catch 'Em All". Works within the franchise are set in the Pokemon universe.</div>`;
}
)


function numberPokemon () {
    var number = 0

    // for (let i = 1; i <= 964; i++) {
        console.log(number++) 
    // }
}

$('#firstButton').click(numberPokemon)