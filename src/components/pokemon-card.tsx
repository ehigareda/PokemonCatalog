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
        className = " group rounded-lg border border-transparent transition-colors hover:border-gray-400"
        >
        <Card>
        <CardHeader>
            <CardTitle>{name}</CardTitle>
        </CardHeader>
        </Card>
        </Link>
    )
  }