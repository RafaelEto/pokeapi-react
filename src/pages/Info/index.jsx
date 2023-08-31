import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect } from "react";
import { useState } from "react";
import PokemonInfo from "../../components/PokemonInfo";
import { Container } from "../../components/PokemonList/styles";
import { BackPage } from "./styles";
import ArrowLeft from "../../components/ArrowLeft";

export default function Info() {
    const params = useParams()
    const navigate = useNavigate()
    const [pokemonInfo, setPokemonInfo] = useState({})

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`).then(response => response.json()).then(response => setPokemonInfo(response))
    }, [])

    console.log(pokemonInfo);

    return (
        <>
            <Header/>
            <Container>
                <BackPage onClick={() => navigate("/")}>
                    <ArrowLeft/>
                </BackPage>
                <PokemonInfo data={pokemonInfo}/>
            </Container>
        </>
    )
}