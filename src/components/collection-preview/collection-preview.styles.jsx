import styled from 'styled-components'

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const TitleStyle = styled.h1`
      font-size: 28px;
      width: 200px;
      margin-bottom: 25px;
      &:hover{
            cursor: pointer;
      }
`
export const Preview = styled.div`
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