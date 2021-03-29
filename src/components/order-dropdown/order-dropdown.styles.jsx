import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const OrderDropdownStyles = styled.div`
    position: fixed;
    width: 80%;
    max-width:1300px;
    height: 80%;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    overflow: auto;
`

export const CloseButton = styled(CustomButton)`
    margin-top: 0px;
    position: absolute;
    top: 2px;
    right: 2px;
    height: 50px;
    width: 10px;
    min-width:10px;
    cursor: pointer;
    z-index: 1;
`

export const Elemente = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
      }
`

export const DetaliiExpediere = styled.div`

`

export const Comanda = styled.div`

`