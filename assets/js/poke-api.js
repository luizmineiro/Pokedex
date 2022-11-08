const pokeApi = {};

pokeApi.getPokemons = function (offset = 0, limit = 5) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map((pokemon) => fetch(pokemon.url).json()))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetail) => {
      debugger
      console.log(pokemonsDetail);
    })
};

Promise.all([
  fetch('https://pokeapi.co/api/v2/pokemon/1'),
  fetch('https://pokeapi.co/api/v2/pokemon/2'),
  fetch('https://pokeapi.co/api/v2/pokemon/3'),
  fetch('https://pokeapi.co/api/v2/pokemon/4')
]).then((results) => {
  console.log(results);
})