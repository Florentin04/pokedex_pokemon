function PokemonCard({pokemon}) {
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="bulbasaur" /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;