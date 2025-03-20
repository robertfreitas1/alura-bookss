import styled from "styled-components";


export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor ?? '#000'};
    text-align:center;
    font-size: 36px;
    margin: 0;
`