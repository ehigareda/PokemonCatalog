"use client"
import { useState } from "react";
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { PokemonCard } from "./pokemon-card";
export function PokemonView(){
    const [ searchInput, setSearchInput] = useState("");
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
            <PokemonCard name="Pikachu" />
        </div>
        </>
    )
}