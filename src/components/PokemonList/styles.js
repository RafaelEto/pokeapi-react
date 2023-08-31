import styled from 'styled-components'

export const SearchWrapper = styled.div `
    max-width: 1500px;
    margin: 0 auto 40px;
    display: flex;
    justify-content: center;
`

export const SearchInput = styled.input `
    background: #fff;
    height: 50px;
    width: 500px;
    border-radius: 10px;
    border: none;
    padding: 0 15px;

    &:focus {
        outline: none;
    }
`

export const Container = styled.div `
    max-width: 1500px;
    margin: 0 auto;
    padding-bottom: 50px;
`

export const PokemonListWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    list-style-type: none;
`

export const Paginate = styled.button `
    max-width: 300px;
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: none;
    background: #222224;
    box-shadow: 0 3px 6px rgba(19, 19, 19, .16);
    font-size: 22px;
    font-weight: 700;
    line-height: 50px;
    color: #fff;
    cursor: pointer;
    display: block;
    margin: 50px auto 0;

    &:hover {
        background: #f00000;
        transition: ease-in-out .3s;
    }
`
