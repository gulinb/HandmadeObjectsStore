import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: Open Sans Condensed;
        padding: 20px 60px;
        position: relative;
        min-height: 100vh;
        max-width: 2000px;
        margin-left: auto;
        margin-right: auto;
        

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