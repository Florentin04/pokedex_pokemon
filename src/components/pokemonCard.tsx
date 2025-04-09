type PokemonCardType = {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
};

function PokemonCard({ pokemon }: PokemonCardType) {
  return (
    <figure>
      {pokemon.imgSrc && <img src={pokemon.imgSrc} alt={pokemon.name} />}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
