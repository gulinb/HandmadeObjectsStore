import React from 'react'
import { toggleOrderForm } from '../../redux/shop/shop.actions'
import {connect} from 'react-redux'
import { OrderDropdownStyles, CloseButton, Elemente} from './order-dropdown.styles'
import DetaliiComanda from '../detalii-comanda/detalii-comanda.component'
import DetaliiExpediere from '../detalii-expediere/detalii-expediere.component'
import { selectMessage, selectShowMessage } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'
import Message from '../message/message.component'


const OrderDropdown = ({showOrderForm, showMessage, message}) => {

        return(
            <OrderDropdownStyles>
            <CloseButton onClick={() => showOrderForm()}>X</CloseButton>
            {
                showMessage
                ?
                null
                :
                <Message message={message} />
            }
            <Elemente>
                <DetaliiExpediere>
                    
                </DetaliiExpediere>
                <DetaliiComanda>
                    
                </DetaliiComanda>
            </Elemente>
            </OrderDropdownStyles>
        )
    }

    const mapStateToProps = createStructuredSelector({
        showMessage: selectShowMessage,
        message: selectMessage
    })

const mapDispatchToProps = dispatch => ({
    showOrderForm: () => dispatch(toggleOrderForm())
})

export default connect(mapStateToProps, mapDispatchToProps )(OrderDropdown)