import { SearchWrapper, SearchInput, Container, PokemonListWrapper, Paginate } from './styles'
import { useEffect, useState } from "react"
import api from "../../services/api"
import Pokemon from '../Pokemon'
import Loading from '../Loading'

export default function PokemonList() {
    const [pokemonList, setPokemonList] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [paginate, setPaginate] = useState(15)

    async function getPokemonList() {
        setLoading(true)
        const {data} = await api.get(`pokemon?limit=${paginate}`)
        setPokemonList(data.results)

        setLoading(false)
    }

    const filteredPokemonList = pokemonList.filter(pokemon => pokemon.name.includes(searchText))

    const handleText = (e) => {
        setSearchText(e.target.value)
    }

    const handlePaginate = () => {
        setPaginate(paginate + 15)
    }

    useEffect(() => {
        getPokemonList()
    }, [paginate])

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
                            url={pokemon.url}
                        />
                    ))}
                    {loading && <Loading/>}
                    {searchText && filteredPokemonList?.map((pokemon, index) => (
                        <Pokemon 
                            key={index}
                            url={pokemon.url}
                        />
                    ))}
                </PokemonListWrapper>
                <Paginate onClick={handlePaginate} disabled={loading}>
                    {loading? "Carregando" : "Carregar mais"}
                </Paginate>
            </Container>
        </>
    )
}