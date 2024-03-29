import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/*
    {
        Favorites: {
            '1': {id: 1, name: 'bulbasaur'},
            '2': {id: 2, name: 'charmander'},
        } 
    }
*/

interface PokemonsState{
    favorites: { [key: string]: SimplePokemon },
}

// const getInitialState = () => {
    
//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//     return favorites;
// }

const initialState: PokemonsState = {

    favorites: {},
    // ...getInitialState(),
    // '1': { id:'1', name: 'bulbasaur'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
        state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        const { id } = pokemon;

        if (state.favorites[id] !== undefined) { //Si el pokemon existe
            delete state.favorites[id];
        } else {
            state.favorites[id] = pokemon;
        }

        //TODO: no se debe de hacer en redux.
        localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));

    }

  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer