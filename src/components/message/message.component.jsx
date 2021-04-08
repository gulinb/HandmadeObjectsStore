import React from 'react'
import {MessageStyles, CloseButton, Text} from './message.styles'
import {connect} from 'react-redux'
import { toggleMessage, toggleOrderForm } from '../../redux/shop/shop.actions'


const Message = ({message, showMessage, showOrderForm}) => {

    const handleChange = () => {
        showMessage()
        showOrderForm()
    }
    return(
    <MessageStyles>
        <CloseButton onClick={handleChange}>X</CloseButton>
        <Text>{message}</Text>
    </MessageStyles>
    )
}



const mapDispatchToProps = dispatch => ({
    showMessage: () => dispatch(toggleMessage()),
    showOrderForm: () => dispatch(toggleOrderForm())
})

export default connect(null, mapDispatchToProps )(Message)