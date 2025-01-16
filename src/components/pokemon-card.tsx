"use client"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

//charizard -> localhost:3000/charizard
interface PokemonCardProps{
    name: string
}
//<PokemonCard name="pikachu" />

export function PokemonCard({name}:PokemonCardProps){
    return(
        <Link
        href={name}
        key={name+"Card"}
        className = " group rounded-lg border border-transparent m-3 transition-colors hover:border-gray-400"
        >
        <Card>
        <CardHeader>
            <CardTitle>{name.charAt(0).toUpperCase()+name.slice(1)}</CardTitle>
        </CardHeader>
        </Card>
        </Link>
    )
  }