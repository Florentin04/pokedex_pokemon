type PokemonType = {
  name: string;
  imgSrc?: string;
};

type NavBarType = {
  setPokemonName: (name: string) => void;
  pokemonList: PokemonType[];
};

function NavBar({ pokemonList, setPokemonName }: NavBarType) {
  return (
    <nav>
      {pokemonList.map((pokemon) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => setPokemonName(pokemon.name)}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;