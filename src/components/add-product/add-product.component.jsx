import React from 'react'
import AddEditForm from '../add-edit-form/add-edit-form.component'
import {withRouter} from 'react-router-dom'
import './add-product.styles'

const AddProduct = ({match}) => {
    const id = match.params.collectionId

    return(
    <AddEditForm collectionId={id}/>
    )
}

export default withRouter(AddProduct)