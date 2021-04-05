import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const MessageStyles = styled.div`
    position: fixed;
    width: 80%;
    max-width:500px;
    height: 80%;
    max-height: 150px;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    overflow: auto;
`

export const CloseButton = styled(CustomButton)`
    margin-top: 0px;
    position: absolute;
    top: 2px;
    right: 2px;
    height: 50px;
    width: 10px;
    min-width:10px;
    cursor: pointer;
    z-index: 1;
`

export const Text = styled.h3`
  width:80%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align:center;

  @media screen and (max-width: 410px){
        top: 60%;
      }
`
