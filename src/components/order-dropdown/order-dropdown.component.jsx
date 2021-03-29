import React from 'react'
import { toggleOrderForm } from '../../redux/shop/shop.actions'
import {connect} from 'react-redux'
import { OrderDropdownStyles, CloseButton, Elemente} from './order-dropdown.styles'
import DetaliiComanda from '../detalii-comanda/detalii-comanda.component'
import DetaliiExpediere from '../detalii-expediere/detalii-expediere.component'



const OrderDropdown = ({showOrderForm}) => {

        return(
            <OrderDropdownStyles>
            <CloseButton onClick={() => showOrderForm()}>X</CloseButton>
            <Elemente>
                <DetaliiExpediere>
                    
                </DetaliiExpediere>
                <DetaliiComanda>
                    
                </DetaliiComanda>
            </Elemente>
            </OrderDropdownStyles>
        )
    }


const mapDispatchToProps = dispatch => ({
    showOrderForm: () => dispatch(toggleOrderForm())
})

export default connect(null, mapDispatchToProps )(OrderDropdown)