'use client';

import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
    
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites)); //transformamos el state a objetos
    const [pokemons, setPokemons] = useState(favoritePokemons);


    return (
        <>
            {
                favoritePokemons.length === 0
                    ? <NoFavorites />
                    : <PokemonGrid pokemons={favoritePokemons} />
            }
        </>
    )
}

export const NoFavorites = () => {
    return (
            <div className="flex flex-col h-[50vh] items-center justify-center">
                <IoHeartOutline size={100} className="text-red-500"/>
                <span>No hay favoritos</span>
            </div>
        )
}