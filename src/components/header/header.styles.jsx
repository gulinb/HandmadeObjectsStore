import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px){
          height: 60px;
          padding: 10px;
          margin-bottom: 50px;
    }

    @media screen and (max-width: 600px){
          margin-bottom: 0;
    }
`

export const TitleContainer = styled.div`
      margin-left: 20px;

      @media screen and (max-width: 800px){
            display: none;
      }
`

export const Title = styled.h1`
      margin: 0;
`

export const SubTitle = styled.h3`
      margin-top: 0;
      text-align: center;
`

export const LogoContainer = styled(Link)`
      height: 100%;
      width: 260px;
      padding: 25px 0 25px 25px;
      display: flex;

      @media screen and (max-width: 600px){
            width: 40px;
            padding: 0;
      }
` 

export const OptionsContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      @media screen and (max-width: 800px){
            width: 85%;
      }
`
export const OptionLink = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;

        @media screen and (max-width: 400px){
            padding: 10px 5px;
      }
`