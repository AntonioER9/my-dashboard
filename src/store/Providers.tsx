'use client';

import { store } from "@/store"
import { setFavoritePokemons } from "@/store/pokemons/pokemons";
import { useEffect } from "react";
import { Provider } from "react-redux"

interface Props{
    children: React.ReactNode
}

export const Providers = ({children}: Props) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    store.dispatch(setFavoritePokemons(favorites));
  }, [])
  
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
