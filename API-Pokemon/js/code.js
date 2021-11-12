const pokemonContainer = document.querySelector('.pokemon-container')
const previous = document.querySelector('#previous')
const next = document.querySelector('#next')


let offset = 1
let limit = 7

previous.addEventListener('click', ()=> {
    if(offset != 1)
        offset -=9 //Con click vamos disminuyendo 9 pokemons
        removeChildNotes(pokemonContainer)
        fetchPokemons(offset, limit)
})

next.addEventListener('click', ()=> {
    offset +=9 //Con click vamos aumentando 9 pokemons
    removeChildNotes(pokemonContainer)
    fetchPokemons(offset, limit)
})

// Para traer un solo pokemon
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => createPokemon(data))
}

// Loop para ir cambiando Id en el fetchPokemon
function fetchPokemons(offset, limit){
    for(let i = offset; i <= offset + limit; i++){
        fetchPokemon(i)
    }
}

function createPokemon(pokemon){
        console.log(pokemon)
        let html = ''
        html += '<div class="col mt-5">' 
        html += '<div class="card bg-warning text-dark poke-card" style="width: 8rem;">'
        html += `<img src="${pokemon.sprites.front_default}" class="card-img-top" alt="img_poke">`
        html += '<div class ="card-body">'
        html += `<h5 class ="card-title">${pokemon.name}</h5>`
        html += `<p class ="card-text">#${pokemon.id}</p>`
        html += '</div>'
        html += '</div>'
        html += '</div>'
        
        pokemonContainer.innerHTML += html 
}

function removeChildNotes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

fetchPokemons(offset, limit) //cuantos pokemons vamos a visualizar

