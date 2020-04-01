
document.getElementById("aboutContent").innerHTML = `<div class="wikiPokemon">Pokemon, also known as Pocket Monsters in Japan, is a Japanese media franchise managed by the Pokemon Company, a company founded and with shares divided between Nintendo, Game Freak, and Creatures. The franchise copyright and Japanese trademark is shared by all three companies, but Nintendo is the sole owner of the trademark in other countries. The franchise was created by Satoshi Tajiri in 1995, and is centered on fictional creatures called "Pokemon", which humans, known as Pokemon Trainers, catch and train to battle each other for sport. The English slogan for the franchise is "Gotta Catch 'Em All". Works within the franchise are set in the Pokemon universe.</div>`;


$(document).ready(function () {
    $("button").click(function clickEvent () {
        $.getJSON("https://pokeapi.co/api/v2/pokemon/", function getData (result) {
            $.each(result, function (i, field) {
                $("div").append(field)
            })
        })
    })
})