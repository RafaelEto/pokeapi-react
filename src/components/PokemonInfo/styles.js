import styled from 'styled-components'
import pokemonTypeColor from '../../utils/functions'

export const PokemonBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    background: #a3a3a3;
    border-radius: 10px;
    overflow: hidden;
`

export const PokemonContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    padding: 30px 0;
    border-radius: 10px;
`

export const PokemonImages = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 1px 8px 10px inset rgba(0, 0, 0, .12);
`

export const PokemonName = styled.p `
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin-top: 25px;
`

export const PokemonCardSearch = styled.div `
    padding: 12.5px;
    width: fit-content;
    margin: 0 auto;
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