import styled from 'styled-components'

import CustomButton from '../custom-button/custom-button.component'

export const CollectionItemStyles = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 400px;
    align-items: center;
    position: relative;
    margin-bottom: 30px;
    &:hover {
      .image {
        opacity: 0.85;
      }
    }

    
    @media screen and (max-width: 800px){
          width: 45vw;
          height: 300px;
      }

      @media screen and (max-width: 390px){
          width: 90vw;
      }
`
export const Image = styled.div`
      width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;
      background-image:  ${({ imageUrl }) => `url(${imageUrl})`};
`
export const CollectionFooter = styled.div`
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
`
export const Name = styled.span`
        width: 75%;
        margin-bottom: 15px;
`
export const Price = styled.span`
        width: 25%;
        text-align: right;
`
export const CustomButtonStyle = styled(CustomButton)`
      width: 80%;
      opacity: 0.7;
      position: absolute;
      align-content: center;
      top: 300px;

      @media screen and (max-width: 800px){
            top: 200px;
      }
`