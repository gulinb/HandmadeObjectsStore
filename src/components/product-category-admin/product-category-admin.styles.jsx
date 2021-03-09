import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CollectionPage = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
  `
export const Title = styled.h2`
      font-size: 38px;
      margin: 0 auto 30px;
`
  
export const Items = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;

      @media screen and (max-width: 800px){
        grid-template-columns: 1fr 1fr;  
       }

       @media screen and (max-width: 390px){
        grid-template-columns: 1fr;  
      }
`

export const CustomButtonStyle = styled(CustomButton)`
      width: 20%;
      opacity: 0.7;
      position: absolute;
`