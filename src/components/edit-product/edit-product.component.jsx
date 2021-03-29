import React from 'react'
import AddEditForm from '../add-edit-form/add-edit-form.component'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selector'

import './edit-product.styles'




const EditProduct = ({match, collection}) => {

    const {elemente, id} = collection

    const element = elemente.find(element => parseInt(element.id) === parseInt(match.params.elementId))

    return(
    <AddEditForm collectionId={id} editElement={element}/>
    )
}


const mapStateToProps = (state, ownProps) => ({
        collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(EditProduct)