import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CustomButtonStyle = styled(CustomButton)`
    width: 200px;
    margin: 20px auto;
`

export const Menu = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 700px){
        grid-template-columns: 1fr;
      }
`

export const SignInStyle = styled.div`
    width: 380px;
    display: flex;
    padding-right: 10px;
    flex-direction: column;
`

export const Button = styled.div`
        display: flex;
        justify-content: space-between;
`