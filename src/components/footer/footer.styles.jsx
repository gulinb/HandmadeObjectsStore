import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(217,217,217,1) 100%, rgba(226,226,226,1) 100%);
    height: 100px;
    border-top: 1px solid #C3C3C3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr 1fr;
      }
`

export const Social = styled.div`
    margin: 0 auto;
    margin-top: 24px;  
`

export const TsC = styled(Link)`
    height: 20px;
    margin: 0 auto;
    margin-top: 37px;
`