/*
****COMMENTED OUT BATTLEMON.HTML****

*/
//Object of poke that stores names, sprites, gifs, and more
var pokedex = {
    "bulbasaur": {
        "name": "Bulbasaur",
        "HP": 100,
        "searchName": "bulbasaur",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "rearSprite": "",
        "description": "This is Bulbasaur",
        "selectGif": 1,
        "moveOne": {
            "name": "Smell Own Fart",
            "animation": 5,
        },
        "moveTwo": {
            "name": "Canon > Nikon",
            "animation": 7,
        },
        "moveThree": {
            "name": "Bob and Weave",
            "animation": 6,
        }, 
    },
    "squirtle": {
        "name": "Squirtle",
        "HP": 100,
        "searchName": "squirtle",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "rearSprite": "",
        "description": "Squirtle is my fav",
        "selectGif": 5,
        "moveOne": {
            "name": "Taunt",
            "animation": 7,
        },
        "moveTwo": {
            "name": "SQUADDDDD!!!!!!",
            "animation": 4,
        },
        "moveThree": {
            "name": "Lover Not A Fighter",
            "animation": 6,
        }, 
    },
    "charmander": {
        "name": "Charmander",
        "HP": 100,
        "searchName": "charmander",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "rearSprite": "",
        "description": "Charmander is cool",
        "selectGif": 9,
        "moveOne": {
            "name": "Call The Fireman!",
            "animation": 0,
        },
        "moveTwo": {
            "name": "Laughs At Own Joke",
            "animation": 11,
        },
        "moveThree": {
            "name": "1-2 Step",
            "animation": 7,
        },
    },
    "snorlax": {
        "name": "Snorlax",
        "HP": 100,
        "searchName": "snorlax",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
        "rearSprite": "",
        "description": "I'm sleepy too fam",
        "selectGif": 0,
        "moveOne": {
            "name": "Big Sleep",
            "animation": 5,
        },
        "moveTwo": {
            "name": "Im Hungry!",
            "animation": 1,
        },
        "moveThree": {
            "name": "Noooo, don't wake Snorlax!",
            "animation": 9,
        },
    },
    "eevee": {
        "name": "Eevee",
        "HP": 100,
        "searchName": "eevee",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        "rearSprite": "",
        "description": "Can Eye Pet That DAWG",
        "selectGif": 0,
        "moveOne": {
            "name": "Big Slide",
            "animation": 3,
        },
        "moveTwo": {
            "name": "Dance Machine",
            "animation": 4,
        },
        "moveThree": {
            "name": "Cuddle",
            "animation": 11,
        },
    },
    "gengar": {
        "name": "Gengar",
        "HP": 100,
        "searchName": "gengar",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        "rearSprite": "",
        "description": "Caspers evil twin is trippin",
        "selectGif": 9,
        "moveOne": {
            "name": "I See Dead People",
            "animation": 8,
        },
        "moveTwo": {
            "name": "Kamehameha",
            "animation": 4,
        },
        "moveThree": {
            "name": "Muahahahahahaha",
            "animation": 15,
        },
    },
    "vulpix": {
        "name": "Vulpix",
        "HP": 100,
        "searchName": "vulpix",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        "rearSprite": "",
        "description": "Who's a good boy, thats right, Vulpix is!",
        "selectGif": 0,
        "moveOne": {
            "name": "Can Eye Pet Dat DAWG",
            "animation": 4,
        },
        "moveTwo": {
            "name": "OP Puppy Eyes",
            "animation": 15,
        },
        "moveThree": {
            "name": "Party Animal",
            "animation": 14,
        },
    },
    "pikachu": {
        "name": "Pikachu",
        "HP": 100,
        "searchName": "pikachu",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "rearSprite": "",
        "description": "PLOT ARMOR",
        "selectGif": 1,
        "moveOne": {
            "name": "LOVE MEEEEEE",
            "animation": 8,
        },
        "moveTwo": {
            "name": "Fine, I will love me myself!",
            "animation": 2,
        },
        "moveThree": {
            "name": "Oh now you want to love me!",
            "animation": 3,
        },
    },
    "pidgeot": {
        "name": "Pidgeot",
        "HP": 100,
        "searchName": "pidgeot",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        "rearSprite": "",
        "description": "Government survielence drone",
        "selectGif": 0,
        "moveOne": {
            "name": "Dive Bomb",
            "animation": 6,
        },
        "moveTwo": {
            "name": "Pidgot is PLURAL",
            "animation": 5,
        },
        "moveThree": {
            "name": "Spreading COVID-19",
            "animation": 14,
        },
    },
    "jigglypuff": {
        "name": "Jigglypuff",
        "HP": 100,
        "searchName": "jigglypuff",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        "rearSprite": "",
        "description": "Jiggle physics",
        "selectGif": 5,
        "moveOne": {
            "name": "Catch These Hands",
            "animation": 3,
        },
        "moveTwo": {
            "name": "You Wouldn't Like Me When I'm Angry!",
            "animation": 0,
        },
        "moveThree": {
            "name": "You Really Mean it?",
            "animation": 9,
        },
    },
    "magikarp": {
        "name": "Magikarp",
        "HP": 100,
        "searchName": "magikarp",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
        "rearSprite": "",
        "description": "Beware of splash",
        "selectGif": 5,
        "moveOne": {
            "name": "TILAPIA IS NOT A REAL FISH",
            "animation": 4,
        },
        "moveTwo": {
            "name": "Magikarp splash is USELESS",
            "animation": 14,
        },
        "moveThree": {
            "name": "I mean Magikarp splash is REALLY USELESS",
            "animation": 3,
        },
    },
    "psyduck": {
        "name": "Psyduck",
        "HP": 100,
        "searchName": "psyduck",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        "rearSprite": "",
        "description": "Psyduck is learning software development. It is giving him a headache!",
        "selectGif": 4,
        "moveOne": {
            "name": "SYNTAX ERRORRRRRR",
            "animation": 0,
        },
        "moveTwo": {
            "name": "OMG Bootstrap WHY ARE MY ITEMS NOT ALIGNED?!?!?!?",
            "animation": 1,
        },
        "moveThree": {
            "name": "When Javascript FINALLY Starts Making Sense!",
            "animation": 3,
        },
    },
    "meowth": {
        "name": "Meowth",
        "HP": 100,
        "searchName": "jigglypuff",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        "rearSprite": "",
        "description": "Jiggle physics",
        "selectGif": 19,
    },
    "charizard": {
        "name": "Charizard",
        "HP": 100,
        "searchName": "charizard",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "rearSprite": "",
        "description": "Beware of splash",
        "selectGif": "",
        "moves": {
            "moveOne": {
                "name": "Get This Pipsqueek Out Of Here",
                "animation": 13,
            },
            "moveTwo": {
                "name": "SPINNING BODY SLAM",
                "animation": 14,
            },
            "moveThree": {
                "name": "Incenerate",
                "animation": 19,
            }
        }
    },
    "mewtwo": {
        "name": "Mewtwo",
        "HP": 100,
        "searchName": "mewtwo",
        "frontSprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
        "rearSprite": "",
        "description": "This excedrin has not kicked in yet",
        "selectGif": 2,
        "moves": {
            "moveOne": {
                "name": "Blink And You Will Miss Him Kicking You Pokemons Butt",
                "animation": 0,
            },
            "moveTwo": {
                "name": "HADUKEN",
                "animation": 1,
            },
            "moveThree": {
                "name": "EYE AM MEWTWO DESTROYER OF WORLDS",
                "animation": 13,
            }
        },
    }

}

//Object that stores the roster of chose poke and the trail array
var selectedPokemon = {
    "team": [],
    "buttonToggle": [],
    "enemyTeam": [pokedex.meowth, pokedex.charizard,pokedex.mewtwo],
    "playerPoke": null,
    "enemyPoke": null,
    "statementBanner": "",
}



const pokePath = "https://pokeapi.co/api/v2/pokemon/"

//Methods to load upon loading of the webpage
$(document).ready(function() {
    document.querySelector("#actionImage").style.visibility = "hidden"
    $("#topPart").hide()
    $("#bottomPart").hide()
    addListers()
    clearSelected()
});

//Add a function to add onclick and onhover listeners
function addListers () {
    $('.butPick').click(function() {
        $(this).toggleClass("down");
        const passPoke = pokedex[this.innerHTML.toLowerCase()]
        pokeCheck(this, passPoke)
      });

    $(".moveButton").click(function(){
        actionBut(this)
    })

    $("#buttonBanner").click(transitionToBattle)

    $(".butPick").hover(function (){
        const passPoke = pokedex[this.innerHTML.toLowerCase()]
        changeHoverSelector(passPoke)
    })
}

//function that will change the img, name, and description due to hover
function changeHoverSelector (poke) {
    $("#hoverPic").prop("src",poke.frontSprite)
    $("#hoverName").prop("innerHTML",poke.name)
    $("#hoverDescription").prop("innerHTML",poke.description)
}

//function that clears the hover panel. called once upon page loading
function clearSelected (){
    $("#hoverPic").prop("src","")
    $("#hoverName").prop("innerHTML","")
    $("#hoverDescription").prop("innerHTML","")
    $(".clearOne").prop("src","")
    $(".clearTwo").prop("innerHTML","")
}

//function that checks if the button is pressed and proceeds to deselect or add poke to roster
function pokeCheck (btn, poke) {
    const isthis = btn.className.includes("down")
    if (isthis === false) {
        const position = selectedPokemon.team.indexOf(poke)
        selectedPokemon.team.splice(position,1)
        selectedPokemon.buttonToggle.splice(position,1)
        changeSelectedTeam()
    } else {
        addPokemon(btn, poke)
        changeSelectedTeam()
    }
}

//fuction that updates roster panels
function changeSelectedTeam () {
    if (selectedPokemon.team[0] != undefined) {
        $("#hoverPicOne").prop("src",selectedPokemon.team[0].frontSprite)
        $("#hoverNameOne").prop("innerHTML",selectedPokemon.team[0].name)
    } else {
        $("#hoverPicOne").prop("src","")
        $("#hoverNameOne").prop("innerHTML","")
    }
    if (selectedPokemon.team[1] != undefined) {
        $("#hoverPicTwo").prop("src",selectedPokemon.team[1].frontSprite)
        $("#hoverNameTwo").prop("innerHTML",selectedPokemon.team[1].name)
    } else {
        $("#hoverPicTwo").prop("src","")
        $("#hoverNameTwo").prop("innerHTML","")
    }
    if (selectedPokemon.team[2] != undefined) {
        $("#hoverPicThree").prop("src",selectedPokemon.team[2].frontSprite)
        $("#hoverNameThree").prop("innerHTML",selectedPokemon.team[2].name)
    } else{
        $("#hoverPicThree").prop("src","")
        $("#hoverNameThree").prop("innerHTML","")
    }
}

//function that adds poke to the roster and if the roster is full, it takes away the first choice
function addPokemon (btn, poke) {
    if(selectedPokemon.team.length > 2){
        
        selectedPokemon.buttonToggle[0].classList.remove("down")
        selectedPokemon.team.shift()
        selectedPokemon.buttonToggle.shift()
        selectedPokemon.team.push(poke)
        selectedPokemon.buttonToggle.push(btn)
    } else{
        selectedPokemon.team.push(poke)
        selectedPokemon.buttonToggle.push(btn)
    }
}

function transitionToBattle () {
    $("#midPart").hide()
    $("#bottomPart").show()
    battleStart()
    updatePokeSprite()

    $.ajax(
        {
          url: "http://api.giphy.com/v1/gifs/search?q=mewtwo&api_key=O6gYWlFjkxGXfXLfGAo201rGt0RZLZkQ",
          success: function (poke) {
            console.log("Go")
          }
        }
    )
}
function updateUI () {
    $("#enemyName").prop("innerHTML", selectedPokemon.enemyPoke.name)
    $("#enemyHP").prop("innerHTML", selectedPokemon.enemyPoke.HP + " / 100")
    $("#playerPokeName").prop("innerHTML", selectedPokemon.playerPoke.name)
    $("#playerPokeHP").prop("innerHTML", selectedPokemon.playerPoke.HP + " / 100")
    $("#butMove1").prop("innerHTML", selectedPokemon.playerPoke.butMove1)
    $("#butMove2").prop("innerHTML", selectedPokemon.playerPoke.butMove2)
    $("#butMove3").prop("innerHTML", selectedPokemon.playerPoke.butMove3)
    $("#statementBanner").prop("innerHTML",selectedPokemon.statementBanner)
}

function updatePokeSprite () {
    $.ajax(
        {
            url: "https://pokeapi.co/api/v2/pokemon/"+selectedPokemon.team[0].name.toLowerCase(),
            success: function (poke) {
                console.log(poke.sprites.back_default)
                $("#playerSprite").prop("src",poke.sprites.back_default)
            }
        }
    )

    updateUI()
}

function battleStart () {
    selectedPokemon.playerPoke = selectedPokemon.team[0]
    selectedPokemon.enemyPoke = selectedPokemon.enemyTeam[0]

    actionImage = ""
    selectedPokemon.statementBanner = "What will " + selectedPokemon.playerPoke.name + " do?"
}

function actionBut (but) {
    $.ajax(
        {
          url: "http://api.giphy.com/v1/gifs/search?q="+selectedPokemon.playerPoke.name.toLowerCase()+"&api_key=O6gYWlFjkxGXfXLfGAo201rGt0RZLZkQ",
          success: function (poke) {
            var move = getMove(but.id)
            $("#actionImage").prop("src",poke.data[move].images.original.url)
            var dmg = damage(selectedPokemon.enemyPoke)
            $("#statementbanner").prop("innerHTML",selectedPokemon.playerPoke.name+" damaged " + selectedPokemon.enemyPoke.name + " for " + dmg)
            
            $("#moveButton").prop('disabled', true)
            setTimeout(function(){
                document.querySelector("#actionImage").style.visibility = "visible"
                setTimeout(function(){ 
                    document.querySelector("#actionImage").style.visibility = "hidden" 
                    updateUI()
                    enemyTurn()
                }, 2000)
                
            }, 1000)
            
          }
        }
      )
}

function getMove (id){
    switch(id) {
        case "butMove1": return selectedPokemon.playerPoke.moveOne.animation; break;
        case "butMove2": return selectedPokemon.playerPoke.moveTwo.animation; break;
        case "butMove3": return selectedPokemon.playerPoke.moveThree.animation; break;

    }
}

function enemyTurn () {
    $("#statementbanner").prop("Team Rocket's Turn")
    $.ajax(
        {
          url: "http://api.giphy.com/v1/gifs/search?q="+selectedPokemon.enemyPoke.name.toLowerCase()+"&api_key=O6gYWlFjkxGXfXLfGAo201rGt0RZLZkQ",
          success: function (poke) {
            $("#actionImage").prop("src",poke.data[0].images.original.url)
            var dmg = damage(selectedPokemon.playerPoke)
            $("#statementbanner").prop("innerHTML",selectedPokemon.enemyPoke.name+ " damaged " + selectedPokemon.playerPoke.name + " for " + dmg)
            
            setTimeout(function(){
                document.querySelector("#actionImage").style.visibility = "visible"
                setTimeout(function(){ 
                    document.querySelector("#actionImage").style.visibility = "hidden"
                    updateUI()
                    playerTurn()
                }, 2000)
            }, 1000)
            
          }
        }
      )

}

function playerTurn () {
    $("#statementbanner").prop("innerHTML", "Your Turn")
    $("#moveButton").prop('disabled', false)
}

function damage (poke) {
    let dmg = Math.floor(Math.random() * 22) + 33
    poke.HP = poke.HP - dmg
    console.log(poke.HP)
    console.log(selectedPokemon.playerPoke.HP)
    console.log(selectedPokemon.enemyPoke.HP)
    return dmg
}