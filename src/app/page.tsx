import { PokemonView } from '@/components/pokemon-view'
import { PokemonCard } from '@/components/pokemon-card'

import Image from "next/image";
import { getPokemonList } from '@/lib/pokemonAPI';

export default async function Home() {
  const PokemonList = await getPokemonList();
  return (

      <PokemonView pokemonList={PokemonList}/>

  );
}
