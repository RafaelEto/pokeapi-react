import { useNavigate } from "react-router-dom"
import { PokemonCard, PokemonBox, PokemonName, PokemonInfo  } from "./styles"
import { useEffect, useState } from "react"

export default function Pokemon({ url }) {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch(url).then(response => response.json()).then(response => setPokemon(response))
    }, [url])

    return (
        <>
            <PokemonCard onClick={() => navigate(`info/${pokemon.id}`)}>
                <PokemonBox>
                    <img src={pokemon.sprites?.other["official-artwork"].front_default || pokemon.sprites?.other["official-artwork"].back_default} alt={pokemon.name} width="200" height="200" />
                    <PokemonInfo>
                        <PokemonName>
                            {pokemon.name}
                        </PokemonName>
                    </PokemonInfo>
                </PokemonBox>
            </PokemonCard>
        </>
    )
}