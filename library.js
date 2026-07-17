let library = JSON.parse(localStorage.getItem("library")) || [];

let container = document.getElementById("library-items");

if(library.length === 0){
container.innerHTML = "<h3 class='text-center'>No games in library</h3>";
}

library.forEach(game=>{

container.innerHTML += `
<div class="game-card">

<img src="${game.img}">

<div style="flex:1">

<h4>${game.name}</h4>

<p class="status">Owned ✔</p>

</div>

<button class="btn btn-info">
Play
</button>

</div>
`;
});