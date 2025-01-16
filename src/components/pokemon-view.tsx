"use client"
import { useState } from "react";
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { PokemonCard } from "./pokemon-card";

interface PokemonViewProps{
    pokemonList: any
}

export function PokemonView({pokemonList} : PokemonViewProps){
    const [ searchInput, setSearchInput] = useState("");
    console.log(pokemonList);
    //filter text
    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon:any) => pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
        )
    }
    //save filtered array of objects
    const filteredPokemonList = searchFilter(pokemonList);
    //show filtered array to user
    return(
        <>
        <div>
            <h2 className="text-2xl py-6 text-center">Search for a Pokemon!</h2>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="pokemonName">Pokemon Name</Label>
                <Input
                type="text"
                value={searchInput}
                autoComplete="off"
                id="pokemonName"
                placeholder="Bulbasaur, Charmander , etc."
                onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <h3 className="text3xl pt-12 pb-6 text-center">Search Results</h3>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            {filteredPokemonList.map((pokemon:any)=> {
                return (
                    <PokemonCard name={pokemon.name} />
                )
            })}
        </div>
        </>
    )
}