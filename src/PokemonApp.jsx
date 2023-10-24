import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const { page, pokemons = [], isLoading } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
    
  }, [])
  

  return (
    <>
        <h1> Pokemon APP </h1>
        <hr />
        <span> Cargando : { isLoading ? 'True' : 'False' } </span>

        <ul>
            { pokemons.map(poke => <li key={ poke.name }>{ poke.name } </li>
            )}
        </ul>

        <hr />
        <span>Pagina: { page } </span>
        <hr />
        <button
            disabled={ isLoading } className="btn btn-primary mx-2"
            onClick={ () => dispatch(getPokemons( page - 1 )) }
        >
          Anterior
        </button>
        <button
            disabled={ isLoading } className="btn btn-primary mx-2"
            onClick={ () => dispatch(getPokemons( page + 1 )) }
        >
          Siguiente
        </button>
    </>
  )
}
