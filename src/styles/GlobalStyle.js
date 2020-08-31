import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    text-align: center;
    background: ${(props) => props.theme.bg}; 
    display: inline block;
`;
