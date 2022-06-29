import styled from 'styled-components'
import pokemonTypeColor from '../../utils/functions'

export const PokemonCard = styled.div `
    flex: 0 1 20%;
    padding: 12.5px;
`

export const PokemonCardSearch = styled.div `
    flex: 0 1 25%;
    padding: 12.5px;
    height: 450px;
`

export const PokemonBox = styled.div `
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 30px 0;
    height: 100%;
`

export const PokemonInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

export const PokemonName = styled.p `
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin-top: 25px;
`

export const PokemonStatsList = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 15px;
    margin-top: 25px;
`

export const PokemonStats = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 1 50%;
    padding: 0 5px;
    margin-bottom: 5px;

    p {
        font-size: 14px;
        font-weight: 700;
        text-transform: capitalize;
        margin-right: 5px;
        color: #000;
    }

    div {
        flex: 1;
        height: 1px;
        border-top: 2px dotted #ddd;
    }

    span {
        font-size: 14px;
        font-weight: 500;
        color: #707070;
        margin-left: 5px;
    }
`

export const PokemonTypesList = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 10px;
    width: 100%;
`

export const PokemonTypes = styled.div `
    padding: 0 10px;
    flex: 0 1 33.3%;
`

export const PokemonTypesBox = styled.div `
    background-color: ${props => pokemonTypeColor(props.typeName)};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    border: 1px solid #ddd;
    height: 30px;

    p {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
    }
`