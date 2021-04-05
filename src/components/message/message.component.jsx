import React from 'react'
import {MessageStyles, CloseButton, Text} from './message.styles'
import {connect} from 'react-redux'
import { toggleMessage } from '../../redux/shop/shop.actions'


const Message = ({message, showMessage}) => (
    <MessageStyles>
        <CloseButton onClick={() => showMessage()}>X</CloseButton>
        <Text>{message}</Text>
    </MessageStyles>
)



const mapDispatchToProps = dispatch => ({
    showMessage: () => dispatch(toggleMessage())
})

export default connect(null, mapDispatchToProps )(Message)