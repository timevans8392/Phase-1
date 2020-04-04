// var number = 1
// $(document).ready(function () {
//     $('#firstButton').click(function clickEvt (Evt) {
//     const newRow = `<tr>
//     <th scope="row" class="rowClass"></th>
//     <td class="image"></td>
//     <td class="name"></td>
//     <td class="height"></td>
//     <td class="weight"></td>
//     </tr>`;

//     $('tbody').append(newRow)
    
//         console.log(number)
//         $('.rowClass').html(number++)
        
//     $.getJSON(`https://pokeapi.co/api/v2/pokemon/${
//             Math.floor(Math.random()*963+1)
//         }`, function clickResult (result) {
//             console.log(result)
//             const image = result.sprites.front_default

//             $('.image').html(`<img src="${image}">`)
//             $('.name').html(`<td>${result.name}</td>`)
//             $('.height').html(`<td>${result.height} ft </td>`)
//             $('.weight').html(`<td>${result.weight} Ib </td>`)

//         }    
//         )
    
    
//     }
//     )
//     document.getElementById("aboutContent").innerHTML = `<div class="wikiPokemon">Pokemon, also known as Pocket Monsters in Japan, is a Japanese media franchise managed by the Pokemon Company, a company founded and with shares divided between Nintendo, Game Freak, and Creatures. The franchise copyright and Japanese trademark is shared by all three companies, but Nintendo is the sole owner of the trademark in other countries. The franchise was created by Satoshi Tajiri in 1995, and is centered on fictional creatures called "Pokemon", which humans, known as Pokemon Trainers, catch and train to battle each other for sport. The English slogan for the franchise is "Gotta Catch 'Em All". Works within the franchise are set in the Pokemon universe.</div>`;
// }
// )

$(document).ready(
    $('#aboutContent').html(`<div class="wikiPokemon">Pokemon, also known as Pocket Monsters in Japan, is a Japanese media franchise managed by the Pokemon Company, a company founded and with shares divided between Nintendo, Game Freak, and Creatures. The franchise copyright and Japanese trademark is shared by all three companies, but Nintendo is the sole owner of the trademark in other countries. The franchise was created by Satoshi Tajiri in 1995, and is centered on fictional creatures called "Pokemon", which humans, known as Pokemon Trainers, catch and train to battle each other for sport. The English slogan for the franchise is "Gotta Catch 'Em All". Works within the franchise are set in the Pokemon universe.</div>`)
)
    


// $('#firstButton').click(function clickEvt (data) {
//     let number = 1
//     $('.rowClass').html(number++)
// })

// $('.image').html(imageInsertFunction)

// function imageInsertFunction (imageData) {
//     $.getSON(`https://pokeapi.co/api/v2/pokemon/${
//         Math.floor(Math.random()*963+1)
//     }`, function (results) {
//         console.log("I'm not wrong!!")
//         return results
//     } )
// }
var number = 1
$('#firstButton').click(function clickEvt (data) {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${
        Math.floor(Math.random()*963+1)
    }`, function randomPokemon (randomData) {
        console.log(randomData)
        
        var image = randomData.sprites.front_default

        $('.rowClass').html(`<th>${number++}</th>`)
        $('.image').html(`<img src="${image}">`)
        $('.name').html(`<td>${randomData.name}</td>`)
        $('.height').html(`<td>${randomData.height} ft</td>`)
        $('.weight').html(`<td>${randomData.weight} lbs</td>`)
    })

    // $('tbody').append(clickEvt)
}


)

