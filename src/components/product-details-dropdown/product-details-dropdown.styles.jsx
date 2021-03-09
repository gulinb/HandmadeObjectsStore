import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const ProductDetailsDropdownStyles = styled.div`
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

    @media screen and (max-width: 1200px){
        max-width: 600px;
      }

`
export const Elemente = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr;
      }
`


export const CloseButton = styled(CustomButton)`
    position: fixed;
     float: right;
    height: 50px;
    width: 10px;
    min-width:10px;
    cursor: pointer;
`

export const Left = styled.div`
    
    top: 10px;
`

export const Right = styled.div`
   
`

export const Image = styled.img`
    width: 95%;

    @media screen and (max-width: 1200px){
        width: 100%;
      }
`
export const Image1 = styled.img`
    width: 20%;
    height: 20%;
`

export const Image2 = styled.img`
    width: 20%;
    height: 20%;
    margin-left: 10px;
`

export const Image3 = styled.img`
    width: 20%;
    height: 20%;
    margin-left: 10px;
`
export const SmallImgBox = styled.div`
    
`
