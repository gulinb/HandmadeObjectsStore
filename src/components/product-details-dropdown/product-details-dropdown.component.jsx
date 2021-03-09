import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector } from 'reselect'
import {selectElement} from '../../redux/shop/shop.selector'
import { toggleProductDetails } from '../../redux/shop/shop.actions'


import {ProductDetailsDropdownStyles, Left, Right, Image, Image1, Image2, Image3, SmallImgBox, CloseButton, Elemente} from './product-details-dropdown.styles'

const ProductDetailsDropdown = ({selectedElement, showDetails}) => {

        const {description, dimensions, imageUrl, imageUrl2, imageUrl3, name, price, quantity} = selectedElement
        
        return(
            
            <ProductDetailsDropdownStyles>
            <div>
            <CloseButton onClick={() => showDetails()}>X</CloseButton>
            </div>
            <Elemente>
                <Left>
                    <Image src={imageUrl} alt='poza' />
                    <SmallImgBox>
                        <Image1 src={imageUrl} alt='poza' />
                        <Image2 src={imageUrl2} alt='poza' />
                        <Image3 src={imageUrl3} alt='poza' />
                    </SmallImgBox>
                </Left>
                    
                <Right>
                    <h2>{name}</h2>
                    <div>{description}</div>
                    <div>{price}</div>
                    <div>{quantity}</div>
                    <div>{dimensions}</div>
                </Right>
            </Elemente>
            </ProductDetailsDropdownStyles>
            )
        }
        
        const mapStateToProps = createStructuredSelector({
            selectedElement: selectElement
})

const mapDispatchToProps = dispatch => ({
    showDetails: () => dispatch(toggleProductDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsDropdown)