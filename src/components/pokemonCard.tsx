interface PokemonCardProps {
  pokemon: {
  name: string;
  imgSrc: string;
  }
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="pokemon" /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
