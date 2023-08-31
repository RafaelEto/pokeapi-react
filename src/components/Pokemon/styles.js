import styled from 'styled-components'

export const PokemonCard = styled.div `
    flex: 0 1 20%;
    padding: 12.5px;
    cursor: pointer;
`

export const PokemonBox = styled.div `
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 30px 0;
    height: 100%;
    
    &:hover {
        box-shadow: 0 4px 8px rgba(19, 19, 19, .16);
        transition: ease-in-out .3s;
    }
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