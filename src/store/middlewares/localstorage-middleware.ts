import { RootState } from "..";
import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        
        // console.log({state: state.getState()});
        next(action);
        if (action.type === 'pokemons/toggleFavorite' ){
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
            return;
        }        
    }
}