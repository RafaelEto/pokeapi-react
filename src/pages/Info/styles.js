import styled from 'styled-components'

export const BackPage = styled.button `
    border: none;
    background: #222224;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: #f00000;
        transition: ease-in-out .3s;
    }
`