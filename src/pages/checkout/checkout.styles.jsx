import styled from 'styled-components'
import CustomButton from '../../components/custom-button/custom-button.component'


export const CheckoutPageContainer = styled.div`
    width: 99%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`

export const CustomButtonStyles = styled(CustomButton)`
      margin-left: auto;
      margin-top: 50px;
      margin-bottom: 100px;

    @media screen and (max-width: 1000px){
          width: 90vw;
    }

`
export const CheckoutHeader = styled.div`
      width: 100%;
      padding: 10px 0;
      left: 0px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkgrey;
`
export const HeaderBlock = styled.div`
        text-transform: capitalize;
        width: 23%;
  
        &:last-child {

          width: 8%;
        }

        @media screen and (max-width: 600px){
            text-align: center;
            &:last-child {
            width: 20%;
        }
        }
`
export const TotalStyle = styled.div`
      display: flex;
      margin-top: 30px;
      margin-left: auto;
      font-size: 36px;
`