import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector } from 'reselect'
import {selectElement} from '../../redux/shop/shop.selector'
import { toggleProductDetails } from '../../redux/shop/shop.actions'


import {ProductDetailsDropdownStyles, Left, Right, Image, Image1, Image2, Image3, SmallImgBox, CloseButton, Elemente, Name, Description, Price, Quantity, Dimensions, MainImageContainer} from './product-details-dropdown.styles'

class ProductDetailsDropdown extends React.Component {
    
    constructor(props){
        super(props)
        const{selectedElement} = props
        const{imageUrl} = selectedElement
        this.state = {
            mainImageUrl : imageUrl
        }
    }

    render(){

    
    const {selectedElement, showDetails} = this.props
    const {description, dimensions, imageUrl, imageUrl2, imageUrl3, name, price, quantity} = selectedElement

        let changeImage = (number) => {
            switch(number){
                case 1:
                    this.setState({mainImageUrl: imageUrl})
                    break
                case 2:
                    this.setState({mainImageUrl: imageUrl2})
                    break
                case 3:
                    this.setState({mainImageUrl: imageUrl3})
                    break
                default:
                    this.setState({mainImageUrl: imageUrl})
            }
        }

        return(
            
            <ProductDetailsDropdownStyles>
            <CloseButton onClick={() => showDetails()}>X</CloseButton>
            <Elemente>
                <Left>
                    <MainImageContainer>
                        <Image src={this.state.mainImageUrl} alt='poza' />
                    </MainImageContainer>
                    <SmallImgBox>
                        <Image1 src={imageUrl} alt='poza' onClick={() => changeImage(1)}/>
                        <Image2 src={imageUrl2} alt='poza' onClick={() => changeImage(2)}/>
                        <Image3 src={imageUrl3} alt='poza' onClick={() => changeImage(3)}/>
                    </SmallImgBox>
                </Left>
                    
                <Right>
                    <Name>{name}</Name>
                    <Description>
                        <h2>Descriere</h2>
                        {description}
                    </Description>
                    <Dimensions><h3>Dimensiuni : {dimensions} mm</h3></Dimensions>
                    <Price><h2>Pret: {price} RON</h2></Price>
                    <Quantity><h3>Cantitate disponibila : {quantity} buc. </h3></Quantity>
                </Right>
            </Elemente>
            </ProductDetailsDropdownStyles>
            )
        }
}
const mapStateToProps = createStructuredSelector({
    selectedElement: selectElement
})

const mapDispatchToProps = dispatch => ({
    showDetails: () => dispatch(toggleProductDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsDropdown)