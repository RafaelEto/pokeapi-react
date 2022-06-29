import styled from 'styled-components'

export const SearchWrapper = styled.div `
    max-width: 1500px;
    margin: 0 auto 20px;
    display: flex;
    justify-content: center;
`

export const SearchInput = styled.input `
    background: #fff;
    height: 50px;
    width: 500px;
    border-radius: 10px;
    border: 2px solid #000;
    padding: 0 15px;

    &:focus {
        outline: none;
    }
`