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
`
export const Elemente = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
      }
`


export const CloseButton = styled(CustomButton)`
    position: absolute;
    top: 2px;
    right: 2px;
    height: 50px;
    width: 10px;
    min-width:10px;
    cursor: pointer;
    z-index: 1;
`

export const Left = styled.div`
    height: 95%;
      position: relative;
`

export const Right = styled.div`
   margin-left: 20px;
`

export const Image = styled.img`
    width: 80%;
    height: 80%;

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
    display: flex;
    justify-content: center;
    align-items:center;
    margin-top: 20px;
`
export const Name = styled.h1`
    text-align: center;
    margin-top: 40px;
`

export const Description = styled.div`

`

export const Price = styled.div`

`

export const Quantity = styled.div`

`

export const Dimensions = styled.div`

`

export const MainImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`