type PokemonType = {
  name: string;
  imgSrc?: string;
};

type NavBarType = {
  setPokemonName: (name: string) => void;
  pokemonList: PokemonType[];
};

function NavBar({ pokemonList, setPokemonName }: NavBarType) {
  const pikachuClick = (name: string) => {
    setPokemonName(name);
    if (name === "Pikachu") {
      alert("Pika Pika! Pikachu!!!");
    }
  };
  return (
    <nav>
      {pokemonList.map((pokemon) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => pikachuClick(pokemon.name)}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;