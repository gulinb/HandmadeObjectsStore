import styled from 'styled-components'

export const CartItemStyles = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    margin-bottom: 15px;
`

export const ImageContainer = styled.div`
      width: 50%;
      padding-right: 15px;
`
export const Image = styled.img`
        width: 100%;
        height: 100%;
`

export const ItemDetails = styled.div`
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 10px 5px;
`

export const Name = styled.span`
        font-size: 16px;
`