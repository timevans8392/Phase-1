var selectHTML = `
    <div class="d-flex justify-content-center" id="selectDescription">
    <h1 class="idChoose" style="color: white;">Choose 3 Pokemon</h1>
    </div>

    <div class="d-flex" id="selectPick">
    <div class="col-3 d-flex flex-column" id="pokePick">
        <img class="mx-4 align-self-center" id="hoverPic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
        <h3 class="text-center" id="hoverName" style="font-weight: 600;">Bulbasaur</h3>
        <p class="text-center" id="hoverDescription" style="font-weight: 600; color: white;">This is a Bulbasaur</p>
    </div>

    <div class="d-flex flex-column col-7" id="picPick">
        <img class="align-self-center" src="" id="idPick" style="height: 100px; width: 130px;">
        <h3 class="text-center" id="idBanner"></h3>
        <div class="d-flex" id="" style="height: 40px;">
            <button class="butPick col" type="button">Squirtle</button>
            <button class="butPick col" type="button">Bulbasaur</button>
            <button class="butPick col" type="button">Charmander</button>
        </div>
        <div class="d-flex" style="height: 40px;">
            <button class="butPick col" type="button">Snorlax</button>
            <button class="butPick col" type="button">Eevee</button>
            <button class="butPick col" type="button">Gengar</button>
        </div>
        <div class="d-flex" style="height: 40px;">
            <button class="butPick col" type="button">Vulpix</button>
            <button class="butPick col" type="button">Pikachu</button>
            <button class="butPick col" type="button">Pidgeot</button>
        </div>
        <div class="d-flex" style="height: 40px;">
            <button class="butPick col" type="button">Jigglypuff</button>
            <button class="butPick col" type="button">Magikarp</button>
            <button class="butPick col" type="button">Psyduck</button>
        </div>
    </div>


    <div class="col" id="infoPick">
        <div class=" d-flex flex-column" id="rosterPick">
            <div class="align-self-center">
                <h3>Roster</h3>
            </div>
            <div id="selectedCell" class="mx-2" style="height: 85px;">
                <img class=" clearOne" style="height: 70px;" id="hoverPicOne" src="">
                <p class=" clearTwo" style="font-weight: 600; color: white;" id="hoverNameOne"></p>
            </div>
            <div id="selectedCell" class="mx-2" style="height: 85px;">
                <img class=" clearOne" style="height: 70px;" id="hoverPicTwo" src="">
                <p class=" clearTwo" style="font-weight: 600; color: white;" id="hoverNameTwo"></p>
            </div>
            <div id="selectedCell" class="mx-2" style="height: 85px;">
                <img class=" clearOne" style="height: 70px;" id="hoverPicThree" src="">
                <p class=" clearTwo" style="font-weight: 600; color: white;" id="hoverNameThree"></p>
            </div>
        </div>
    </div>
    </div>

    <div class="mt-1" id="buttonBanner">
    <button class="w-100 frontBattleButton" type="button">Proceed to battle</button>
    </div>
`