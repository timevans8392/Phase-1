//Object of poke that stores names, sprites, gifs, and more
var pokedex = {
    bulbasaur: {
      name: 'Bulbasaur',
      HP: 100,
      searchName: 'bulbasaur',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      ally: 'player',
      description: 'This is Bulbasaur',
      selectGif: 'https://media.giphy.com/media/gbp8miehWvA5O/giphy.gif',
      moveOne: {
        name: 'Smell Own Fart',
        animation: 'https://media.giphy.com/media/dlblXNGqGITBK/giphy.gif'
      },
      moveTwo: {
        name: 'Canon > Nikon',
        animation: 'https://media.giphy.com/media/RjbdmNJXWnSEM/giphy.gif'
      },
      moveThree: {
        name: 'Bob and Weave',
        animation: 'https://media.giphy.com/media/1lEHpGxcanoVG/giphy.gif'
      }
    },
    squirtle: {
      name: 'Squirtle',
      HP: 100,
      searchName: 'squirtle',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      ally: 'player',
      description: 'Squirtle is my fav',
      selectGif: 'https://media.giphy.com/media/v55Vj51gfcRsk/giphy.gif',
      moveOne: {
        name: 'Taunt',
        animation: 'https://media.giphy.com/media/3xgR6JaucMaXe/giphy.gif'
      },
      moveTwo: {
        name: 'SQUADDDDD!!!!!!',
        animation:
          'https://media2.giphy.com/media/ardUtH5FlenO8/giphy.gif?cid=61677ef553a8e37b716f392d42113fd59c130c1829bc0b76&rid=giphy.gif'
      },
      moveThree: {
        name: 'Lover Not A Fighter',
        animation: 'https://media.giphy.com/media/pMtLKNjb2IVXO/giphy.gif'
      }
    },
    charmander: {
      name: 'Charmander',
      HP: 100,
      searchName: 'charmander',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      ally: 'player',
      description: 'Charmander is cool',
      selectGif: 'https://media.giphy.com/media/bkQAAeOePeK3e/giphy.gif',
      moveOne: {
        name: 'Call The Fireman!',
        animation: 'https://media.giphy.com/media/WJ7Tr9wi8xVe0/giphy.gif'
      },
      moveTwo: {
        name: 'Laughs At Own Joke',
        animation: 'https://media.giphy.com/media/wwPDRRWLpQeA0/giphy.gif'
      },
      moveThree: {
        name: '1-2 Step',
        animation: 'https://media.giphy.com/media/PaO4UnhkVBEvS/giphy.gif'
      }
    },
    snorlax: {
      name: 'Snorlax',
      HP: 100,
      searchName: 'snorlax',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
      ally: 'player',
      description: "I'm sleepy too fam",
      selectGif: 'https://media.giphy.com/media/e5xL4bU0ETgLm/giphy.gif',
      moveOne: {
        name: 'Big Sleep',
        animation: 'https://media.giphy.com/media/5RxNQCK01NdAc/giphy.gif'
      },
      moveTwo: {
        name: 'Im Hungry!',
        animation: 'https://media.giphy.com/media/13LyF6rEoNbVZu/giphy.gif'
      },
      moveThree: {
        name: "Noooo, don't wake Snorlax!",
        animation: 'https://media.giphy.com/media/SROwF69zCbMOY/giphy.gif'
      }
    },
    eevee: {
      name: 'Eevee',
      HP: 100,
      searchName: 'eevee',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
      ally: 'player',
      description: 'Can Eye Pet That DAWG',
      selectGif: 'https://media.giphy.com/media/133cAiXr4T1te/giphy.gif',
      moveOne: {
        name: 'Going Turbo',
        animation: 'https://media.giphy.com/media/zA8DCuqyKtEK4/giphy.gif'
      },
      moveTwo: {
        name: 'Dance Machine',
        animation: 'https://media.giphy.com/media/kz5CpmaFn9BAI/giphy.gif'
      },
      moveThree: {
        name: 'Cuddle',
        animation: 'https://media.giphy.com/media/102u5uX2Zk6wBq/giphy.gif'
      }
    },
    gengar: {
      name: 'Gengar',
      HP: 100,
      searchName: 'gengar',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
      ally: 'player',
      description: 'Caspers evil twin is trippin',
      selectGif: 'https://media.giphy.com/media/ryf8k3opPug8M/giphy.gif',
      moveOne: {
        name: 'I See Dead People',
        animation: 'https://media.giphy.com/media/yTkhVSkqDblfO/giphy.gif'
      },
      moveTwo: {
        name: 'Kamehameha',
        animation: 'https://media.giphy.com/media/U2qDK70S23fwY/giphy.gif'
      },
      moveThree: {
        name: 'Muahahahahahaha',
        animation: 'https://media.giphy.com/media/EJwx387GEmm1q/giphy.gif'
      }
    },
    vulpix: {
      name: 'Vulpix',
      HP: 100,
      searchName: 'vulpix',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
      ally: 'player',
      description: "Who's a good boy, thats right, Vulpix is!",
      selectGif: 'https://media.giphy.com/media/11JusiVENarrig/giphy.gif',
      moveOne: {
        name: 'Can Eye Pet Dat DAWG',
        animation: 'https://media.giphy.com/media/OcQeMsk7diiT6/giphy.gif'
      },
      moveTwo: {
        name: 'OP Puppy Eyes',
        animation: 'https://media.giphy.com/media/isrZZ7YHBlrQQ/giphy.gif'
      },
      moveThree: {
        name: 'You bore me!',
        animation: 'https://media.giphy.com/media/MR2L4RdJpDvNK/giphy.gif'
      }
    },
    pikachu: {
      name: 'Pikachu',
      HP: 100,
      searchName: 'pikachu',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      ally: 'player',
      description: 'PLOT ARMOR',
      selectGif: 'https://media.giphy.com/media/xuXzcHMkuwvf2/giphy.gif',
      moveOne: {
        name: 'No waayyyyy',
        animation: 'https://media.giphy.com/media/3kzJvEciJa94SMW3hN/giphy.gif'
      },
      moveTwo: {
        name: 'LMAOOOO',
        animation: 'https://media.giphy.com/media/tVlVQSoY7g8H6/giphy.gif'
      },
      moveThree: {
        name: 'Please love me!',
        animation: 'https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif'
      }
    },
    pidgeot: {
      name: 'Pidgeot',
      HP: 100,
      searchName: 'pidgeot',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
      ally: 'player',
      description: 'Government survielence drone',
      selectGif: 'https://media.giphy.com/media/zeKWDcr47kYgw/giphy.gif',
      moveOne: {
        name: 'Dive Bomb',
        animation: 'https://media.giphy.com/media/RukGQRqOYKuek/giphy.gif'
      },
      moveTwo: {
        name: 'Pidgot is PLURAL',
        animation: 'https://media.giphy.com/media/Wb3frOBROJjdS/giphy.gif'
      },
      moveThree: {
        name: 'Spreading COVID-19',
        animation: 'https://media.giphy.com/media/uONAkav2vDEd2/giphy.gif'
      }
    },
    jigglypuff: {
      name: 'Jigglypuff',
      HP: 100,
      searchName: 'jigglypuff',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
      ally: 'player',
      description: 'Jiggle physics',
      selectGif: 'https://media.giphy.com/media/zji7acZDpks9i/giphy.gif',
      moveOne: {
        name: 'Catch These Hands',
        animation: 'https://media.giphy.com/media/tiOUGrxJnWtfG/giphy.gif'
      },
      moveTwo: {
        name: "You Wouldn't Like Me When I'm Angry!",
        animation: 'https://media.giphy.com/media/eXUlPn1gmZavu/giphy.gif'
      },
      moveThree: {
        name: 'You Really Mean it?',
        animation: 'https://media.giphy.com/media/oHB0VofpRubjW/giphy.gif'
      }
    },
    magikarp: {
      name: 'Magikarp',
      HP: 100,
      searchName: 'magikarp',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
      ally: 'player',
      description: 'Beware of splash',
      selectGif: 'https://media.giphy.com/media/tTSn8V8szr72g/giphy.gif',
      moveOne: {
        name: 'TILAPIA IS NOT A REAL FISH',
        animation: 'https://media.giphy.com/media/11egHKtNpdIICc/giphy.gif'
      },
      moveTwo: {
        name: 'Magikarp splash is USELESS',
        animation: 'https://media.giphy.com/media/ysYvIll9qWCNq/giphy.gif'
      },
      moveThree: {
        name: 'I mean Magikarp splash is REALLY USELESS',
        animation: 'https://media.giphy.com/media/Zt5jvm3Qusle8/giphy.gif'
      }
    },
    psyduck: {
      name: 'Psyduck',
      HP: 100,
      searchName: 'psyduck',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
      ally: 'player',
      description:
        'Psyduck is learning software development. It is giving him a headache!',
      selectGif: 'https://media.giphy.com/media/ygRvBA8SWudws/giphy.gif',
      moveOne: {
        name: 'SYNTAX ERRORRRRRR',
        animation: 'https://media.giphy.com/media/hQ0GvkpZwYcgM/giphy.gif'
      },
      moveTwo: {
        name: 'Bootstrap Y U NO WORK RIGHT!?',
        animation: 'https://media.giphy.com/media/asbP3eIpTXlxS/giphy.gif'
      },
      moveThree: {
        name: 'When Javascript FINALLY Starts Making Sense!',
        animation: 'https://media.giphy.com/media/3IQsGPmOK8s4U/giphy.gif'
      }
    },
    meowth: {
      name: 'Meowth',
      HP: 100,
      searchName: 'meowth',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
      ally: 'enemy',
      description: 'Jeff Bezos',
      selectGif: 19
    },
    charizard: {
      name: 'Charizard',
      HP: 100,
      searchName: 'charizard',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      ally: 'enemy',
      description: 'Fireman',
      selectGif: '',
      moves: {
        moveOne: {
          name: 'Get This Pipsqueek Out Of Here',
          animation: 13
        },
        moveTwo: {
          name: 'SPINNING BODY SLAM',
          animation: 14
        },
        moveThree: {
          name: 'Incenerate',
          animation: 19
        }
      }
    },
    mewtwo: {
      name: 'Mewtwo',
      HP: 100,
      searchName: 'mewtwo',
      frontSprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
      ally: 'enemy',
      description: 'Prepare to diieee',
      selectGif: 2,
      moves: {
        moveOne: {
          name: 'Blink And You Will Miss Him Kicking You Pokemons Butt',
          animation: 0
        },
        moveTwo: {
          name: 'HADUKEN',
          animation: 1
        },
        moveThree: {
          name: 'EYE AM MEWTWO DESTROYER OF WORLDS',
          animation: 13
        }
      }
    }
  }
  
//Condition check for completion
  var done = false
  
  //Object that stores the roster of chose poke and the trail array
  var selectedPokemon = {
    team: [],
    buttonToggle: [],
    enemyTeam: [pokedex.meowth, pokedex.charizard, pokedex.mewtwo],
    playerPoke: null,
    enemyPoke: null,
    playerPosition: 0,
    enemyPosition: 0,
    statementBanner: ''
  }
  
  //Placed the pokiapi path to a constant
  const pokePath = 'https://pokeapi.co/api/v2/pokemon/'
  
  //Methods to load upon loading of the webpage
  $(document).ready(function() {
    addListers()
    clearSelected()
  })

  function battle (){
    $("#battleCore").prop("innerHTML",selectHTML)
    addListers()
    document.querySelector("#idBanner").style.visibility = "hidden"
    document.querySelector("#idPick").style.visibility = "hidden"
    document.querySelector("#hoverPic").style.visibility = "hidden"
    document.querySelector("#hoverName").style.visibility = "hidden"
    document.querySelector("#hoverDescription").style.visibility = "hidden"
  }
  
  //Add a function to add onclick and onhover listeners
  function addListers() {
    $('.butPick').click(function() {
      const passPoke = pokedex[this.innerHTML.toLowerCase()]
      selectGif(passPoke)
      $(this).toggleClass('down')
      pokeCheck(this, passPoke)
    })
  
    $('.moveButton').click(function() {
      actionBut(this)
    })
  
    $('#buttonBanner').click(transitionToBattle)
  
    $('.butPick').hover(function() {
      const passPoke = pokedex[this.innerHTML.toLowerCase()]
      changeHoverSelector(passPoke)
    })
  }
  
  function selectGif(poke) {
    $('#idPick').prop('src', poke.selectGif)
    $('#idBanner').prop('innerHTML', 'You selected ' + poke.name)
    document.querySelector("#idBanner").style.visibility = "visible"
    document.querySelector("#idPick").style.visibility = "visible"
    $(".butPick").prop("disabled", true)
    setTimeout(function() {
      document.querySelector("#idBanner").style.visibility = "hidden"
      document.querySelector("#idPick").style.visibility = "hidden"
      $('#idPick').prop('src', '')
      $(".butPick").prop("disabled",false)
    }, 2000)
  }
  
  //function that will change the img, name, and description due to hover
  function changeHoverSelector(poke) {
    document.querySelector("#hoverPic").style.visibility = "visible"
    document.querySelector("#hoverName").style.visibility = "visible"
    document.querySelector("#hoverDescription").style.visibility = "visible"
    $('#hoverPic').prop('src', poke.frontSprite)
    $('#hoverName').prop('innerHTML', poke.name)
    $('#hoverDescription').prop('innerHTML', poke.description)
  }
  
  //function that clears the hover panel. called once upon page loading
  function clearSelected() {
    $('#hoverPic').prop('src', '')
    $('#hoverName').prop('innerHTML', '')
    $('#hoverDescription').prop('innerHTML', '')
    $('.clearOne').prop('src', '')
    $('.clearTwo').prop('innerHTML', '')
  }
  
  //function that checks if the button is pressed and proceeds to deselect or add poke to roster
  function pokeCheck(btn, poke) {
    const isthis = btn.className.includes('down')
    if (isthis === false) {
      const position = selectedPokemon.team.indexOf(poke)
      selectedPokemon.team.splice(position, 1)
      selectedPokemon.buttonToggle.splice(position, 1)
      changeSelectedTeam()
    } else {
      addPokemon(btn, poke)
      changeSelectedTeam()
    }
  }
  
  //fuction that updates roster panels
  function changeSelectedTeam() {
    if (selectedPokemon.team[0] != undefined) {
      $('#hoverPicOne').prop('src', selectedPokemon.team[0].frontSprite)
      $('#hoverNameOne').prop('innerHTML', selectedPokemon.team[0].name)
    } else {
      $('#hoverPicOne').prop('src', '')
      $('#hoverNameOne').prop('innerHTML', '')
    }
    if (selectedPokemon.team[1] != undefined) {
      $('#hoverPicTwo').prop('src', selectedPokemon.team[1].frontSprite)
      $('#hoverNameTwo').prop('innerHTML', selectedPokemon.team[1].name)
    } else {
      $('#hoverPicTwo').prop('src', '')
      $('#hoverNameTwo').prop('innerHTML', '')
    }
    if (selectedPokemon.team[2] != undefined) {
      $('#hoverPicThree').prop('src', selectedPokemon.team[2].frontSprite)
      $('#hoverNameThree').prop('innerHTML', selectedPokemon.team[2].name)
    } else {
      $('#hoverPicThree').prop('src', '')
      $('#hoverNameThree').prop('innerHTML', '')
    }
  }
  
  //function that adds poke to the roster and if the roster is full, it takes away the first choice
  function addPokemon(btn, poke) {
    if (selectedPokemon.team.length > 2) {
      selectedPokemon.buttonToggle[0].classList.remove('down')
      selectedPokemon.team.shift()
      selectedPokemon.buttonToggle.shift()
      selectedPokemon.team.push(poke)
      selectedPokemon.buttonToggle.push(btn)
    } else {
      selectedPokemon.team.push(poke)
      selectedPokemon.buttonToggle.push(btn)
    }
  }
  
  function transitionToBattle() {
    if(selectedPokemon.team.length === 3){
      $("#battleCore").prop("innerHTML", beginBattle)
    addListers()
    battleStart()
    selectedPokemon.enemyPoke = selectedPokemon.enemyTeam[0]
    updatePokeSprite()
    } else {
      alert("Please Select 3 Pokemon!")
    }
  }
  function updateUI() {
    $('#enemyName').prop('innerHTML', selectedPokemon.enemyPoke.name)
    $('#enemyHP').prop('innerHTML', selectedPokemon.enemyPoke.HP + ' / 100')
    $('#playerPokeName').prop('innerHTML', selectedPokemon.playerPoke.name)
    $('#playerPokeHP').prop('innerHTML', selectedPokemon.playerPoke.HP + ' / 100')
    $('#butMove1').prop('innerHTML', selectedPokemon.playerPoke.moveOne.name)
    $('#butMove2').prop('innerHTML', selectedPokemon.playerPoke.moveTwo.name)
    $('#butMove3').prop('innerHTML', selectedPokemon.playerPoke.moveThree.name)
    $('#statementBanner').prop('innerHTML', selectedPokemon.statementBanner)
  }
  
  function updatePokeSprite() {
    $.ajax({
      url: pokePath + selectedPokemon.playerPoke.searchName,
      success: function(poke) {
        $('#playerSprite').prop('src', poke.sprites.back_default)
      }
    })
  
    $.ajax({
      url: pokePath + selectedPokemon.enemyPoke.searchName,
      success: function(poke) {
        $('#enemySprite').prop('src', poke.sprites.front_default)
      }
    })
  
    updateUI()
  }
  
  function battleStart() {
    selectedPokemon.playerPoke = selectedPokemon.team[0]
    selectedPokemon.enemyPoke = selectedPokemon.enemyTeam[0]
  
    actionImage = ''
    selectedPokemon.statementBanner =
      'What will ' + selectedPokemon.playerPoke.name + ' do?'
  }
  
  function actionBut(but) {
    if (done === true) {
      console.log("Done")
      return
    }
    var move = getMove(but.id)
    $('#actionImage').prop('src', move)
    var dmg = damage(selectedPokemon.playerPoke, selectedPokemon.enemyPoke)
    setTimeout(function() {
      document.querySelector('#actionImage').style.visibility = 'visible'
      setTimeout(function() {
        document.querySelector('#actionImage').style.visibility = 'hidden'
        updateUI()
        enemyTurn()
      }, 2000)
    }, 1000)
  }
  
  function getMove(id) {
    switch (id) {
      case 'butMove1':
        return selectedPokemon.playerPoke.moveOne.animation
        break
      case 'butMove2':
        return selectedPokemon.playerPoke.moveTwo.animation
        break
      case 'butMove3':
        return selectedPokemon.playerPoke.moveThree.animation
        break
      case 'butMove4':
        return randomGif()
        break
    }
  }
  
  function randomGif() {
    let dmg = Math.floor(Math.random() * 25)
    $.ajax({
      url:
        'http://api.giphy.com/v1/gifs/search?q=pokemon&api_key=O6gYWlFjkxGXfXLfGAo201rGt0RZLZkQ',
      success: function(poke) {
        console.log(poke.data[dmg].images.original.url)
        return poke.data[dmg].images.original.url
      }
    })
  }
  
  function enemyTurn() {
    if (done === true) {
      console.log("Done")
      return
    }
    $('#statementbanner').prop("Team Rocket's Turn")
    $.ajax({
      url:
        'http://api.giphy.com/v1/gifs/search?q=' +
        selectedPokemon.enemyPoke.name.toLowerCase() +
        '&api_key=O6gYWlFjkxGXfXLfGAo201rGt0RZLZkQ',
      success: function(poke) {
        $('#actionImage').prop('src', poke.data[0].images.original.url)
        damage(selectedPokemon.enemyPoke, selectedPokemon.playerPoke)
        setTimeout(function() {
          document.querySelector('#actionImage').style.visibility = 'visible'
          setTimeout(function() {
            document.querySelector('#actionImage').style.visibility = 'hidden'
            updateUI()
            $('.moveButton').prop('disable',false)
            playerTurn()
          }, 2000)
        }, 1000)
      }
    })
  }
  
  function playerTurn() {
    $('#statementbanner').prop('innerHTML', 'Your Turn')
    $('.moveButton').prop('disabled', false)
  }
  
  function damage(sender, receiver) {
    let dmg
    if(sender.name === 'Mewtwo'){
      dmg = Math.floor(Math.random() * 22) + 43
    } else {
      dmg = Math.floor(Math.random() * 22) + 33
    }
    
    $('#statementbanner').prop(
      'innerHTML',
      sender.name + ' damaged ' + receiver.name + ' for ' + dmg
    )
    receiver.HP = receiver.HP - dmg
    if (receiver.HP <= 0) {
      nextPoke(receiver)
    }
  }
  
  function nextPoke(poke) {
    if (poke.ally === 'player') {
      if (selectedPokemon.playerPosition === 2) {
        victory(true)
      } else {
        selectedPokemon.playerPosition++
        selectedPokemon.playerPoke =
          selectedPokemon.team[selectedPokemon.playerPosition]
        updatePokeSprite()
      }
    } else {
      if (selectedPokemon.enemyPosition === 2) {
        victory(false)
      } else {
        selectedPokemon.enemyPosition++
        selectedPokemon.enemyPoke =
          selectedPokemon.enemyTeam[selectedPokemon.enemyPosition]
        updatePokeSprite()
      }
    }
  }
  
  function victory(cond) {
    if (cond === true) {
      document.querySelector('#actionImage').style.visibility = 'visible'
      $('#statementbanner').prop('innerHTML', 'DEFEATED')
      $('#actionImage').prop(
        'src',
        'https://media.giphy.com/media/wzRfW1SV1DSec/giphy.gif'
      )
      done = true
    } else {
      document.querySelector('#actionImage').style.visibility = 'visible'
      $('#statementbanner').prop('innerHTML', 'VICTORY')
      $('#actionImagefinal').prop(
        'src',
        'https://media.giphy.com/media/cQNRp4QA8z7B6/giphy.gif'
      )
      done = true
    }
  }
  