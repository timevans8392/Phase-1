var beginBattle = `
<div class="d-flex h-75" id="battleDisplay">
            <div class="bottomLayer d-flex flex-column align-items-end justify-content-end w-25">
                <div id="playerPokeHUD" class="align-self-center w-75" style="border: 2px solid #506860; background-color: #f8f8d8">
                    <div class="p-1">
                        <p id="playerPokeName">Bulbasaur</p>
                        <p id="playerPokeHP">100/100 HP</p>
                    </div>
                </div>
                <img id="playerSprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" id="playerPoke"></div>
            <div class="midLayer d-flex w-50">
                
                <img class="align-self-center" id="actionImage" src="" id="battleImage">
                
            </div>
            <div class="topLayer d-flex flex-column justify-content-end w-25">
                <img id="enemySprite" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" id="enemyPokePic">
                <div id="enemyHUD" class="align-self-center w-75" style="border: 2px solid #506860; background-color: #f8f8d8">
                    <div class="p-1">
                        <p id="enemyName">Meowth</p>
                        <p id="enemyHP">100/100 HP</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div id="infoPart">
            <div id="commandLayer" class="w-100 h-25">
                <h1 id="statementbanner" class="text-center">Your Turn</h1>
                <div id="commandButtons">
                    <div class="d-flex">
                        <button class="moveButton w-50" type="button" id="butMove1">Move 1</button>
                        <button class="moveButton w-50" type="button" id="butMove2">Move 2</button>
                    </div>
                    <div class="d-flex">
                        <button class="moveButton w-50" type="button" id="butMove3">Move 3</button>
                        <button class="moveButton w-50" type="button" id="butMove4">Phone A Friend</button>
                    </div>
                </div>
            </div>
        </div>

`