import styled, {css} from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: black;
`

export const ComandaContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  
`
export const CustomButtonStyle = styled(CustomButton)`
        width:50px;
`

export const FormInputStyle = styled.input`
    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 5px 0px;
    display: block;
    width: 95%;
    /* border: none; */
    border-radius: 0;
    /* border-bottom: 1px solid grey; */
    margin: auto auto;
`

export const Button = styled.div`
        display: flex;
        width: 50px;
        padding-left:3px;
`

export const ComandaHeader = styled.div`
      width: 1800px;
      padding: 5px 0;
      left: 0px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkgrey;
      
`
export const IDBlock = styled.div`
        width: 100px;
        border-right: 1px solid darkgrey;
        text-align:center;
`
export const NumeBlock = styled.div`
        width: 200px;
        text-align:center;
        border-right: 1px solid darkgrey;
`
export const PrenumeBlock = styled.div`
        text-align:center;
        border-right: 1px solid darkgrey;
        width: 200px;
`
export const AdresaBlock = styled.div`
        text-align:center;
        border-right: 1px solid darkgrey;
        width: 300px;
`
export const OrasBlock = styled.div`
        text-align:center;
        border-right: 1px solid darkgrey;
        width: 150px;
`
export const JudetBlock = styled.div`
        text-align:center;
        border-right: 1px solid darkgrey;
        width: 150px;
`
export const TelefonBlock = styled.div`
        text-align:center;
        border-right: 1px solid darkgrey;
        width: 150px;
`
export const EmailBlock = styled.div`
        text-align:center;
        border-right: 1px solid darkgrey;
        width: 300px;
`
export const PlataBlock = styled.div`
        text-align:center;
        border-right: 1px solid darkgrey;
        width: 100px;
`
export const TotalBlock = styled.div`
        border-right: 1px solid darkgrey;
        text-align:center;
        width: 80px;
`
export const DataBlock = styled.div`
        text-align:center;
        border-right: 1px solid darkgrey;
        width: 200px;
`
export const ProduseBlock = styled.div`
        text-align:center;
        border-right: 1px solid darkgrey;
        width: 300px;
`
export const StatusComandaBlock = styled.div`
        text-align:center;
        width: 100px;
`

export const AWBBlock = styled.div`
        border-right: 1px solid darkgrey;
        text-align:center;
        width: 250px;
`