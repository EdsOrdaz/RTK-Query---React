import { useMemo } from "react";
import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice";


export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemon() );
        
        page = page<0 ? 0 : page;

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        dispatch( setPokemons( { pokemons: data.results, page: page }) );
    }
}