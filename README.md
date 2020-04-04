Phase One is the ending chapter 

Quintus has updated the readme.

Contributor: Henry Lee
Contributor: Ulysses Salinas

Sunday, 3/29/20 by Ulysses
I have added some basic structure to index.html and index.css just to get the ball rolling for the index.js file. As of now there are two calls to separate APIs. One is to the pokemonapi via axios and the other is the giphy api via jQuery. As of now when you seach a pokemon by the pokemon name or index number, the name, weight, and a gif associated with that name value is returned. There is an alert set up that is triggered when anything outside the "pokemon" scope is typed in the search bar, however code needs to be written to prevent undefined values from returning gifs. Also, the ability to seach pokemon with capital letters needs to be allowed. These are a couple of things that I will continue to work on if we move forward with my code. I do apologize to the rest of the group for the structure of my code, but I tried to leave some notes. Please feel free to modify any of the code! The IDs and classes at this moment can just be placeholders. 


Sunday, 3/29/20 (2) By Henry
1. Changed the title in the head tag from "Jokes on You!" to "Catch the Pokemon!"
2. Added copyright <div> in the bottom of <body> tag
3. Added a Navbar

Monday, 3/30/20 by Ulysses

I added a random pokemon button that will return a random pokemon and associated GIF. 
I added the pokemon "Order" and "Species" to the information returned.
Trying to search without an input will alert the user.
I made the search input case insensitive. 
Out of the 807 pokemon available, not all will have GIFs, or GIFs associated with Pokemon. So adding "pokemon" to the search string will almost always return some kind of pokemon GIF when there is not a specific pokemon GIF available. There are some pretty freaky pokemon GIFs that show up due to specific GIFs not existing. 


Tuesday, 3/31/20 by Ulysses
I changed the style of the random pokemon button.
I added a required search property to the input tag.
I am still contemplating how many search results should be available for the random GIFs.
I renamed a div to <pokemon-container>

Friday, 4/3/20 by Ulysses
I updated the returned values from the API call.
I tried making the layout more engaging/inviting.
Alternate js library use is still pending. 