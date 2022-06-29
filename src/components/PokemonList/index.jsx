import { SearchWrapper, SearchInput, Container, PokemonListWrapper } from './styles'
import { useEffect, useState } from "react"
import api from "../../services/api"
import Pokemon from '../Pokemon'
import Loading from '../Loading'
import { debounce } from 'lodash'
import { useCallback } from 'react'

export default function PokemonList() {
    const [pokemonList, setPokemonList] = useState([])
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('')

    async function getData() {
        const {data} = await api.get("pokemon?limit=150")
        setPokemonList(data.results)
        setLoading(true)
    }
    
    async function searchPokemon(text) {
        const {data} = await api.get(`pokemon/${text}`)
        setPokemon(data)
        setLoading(true)
    }
    
    const debouncedOnChange = useCallback(
        debounce((val) => setSearchText(val), 1000),
        [],
    );

    const handleText = (e) => {
        debouncedOnChange(e.target.value)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        searchPokemon(searchText)
    }, [searchText])

    return (
        <>
            <SearchWrapper>
                <SearchInput 
                placeholder='Pesquisar Pokemon'
                onChange={handleText}
                />
            </SearchWrapper>
            <Container>
                <PokemonListWrapper>
                    {!searchText && pokemonList?.map((pokemon, index) => (
                        <Pokemon 
                        key={index}
                        image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + (index + 1) + ".svg"}
                        name={pokemon.name}
                        />
                    ))}
                    {!loading && <Loading/>}
                    {searchText && (
                        <Pokemon
                        data={pokemon} />
                    )}
                </PokemonListWrapper>   
            </Container>
        </>
    )
}