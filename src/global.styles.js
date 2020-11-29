import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: Open Sans Condensed;
        padding: 20px 40px;

        @media screen and (max-width: 800px){
            padding: 0 20px 0 20px;
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    *{
        box-sizing: border-box;
  }
`