
 import React from 'react'
 import FormInput from '../form-input/form-input.component'
 import CustomButton from '../custom-button/custom-button.component'
 import {ProductData, Button} from './add-edit-form.styles.jsx'
 import { addElement, findElement, updateElement } from '../../mySql/mySql.utils'
 import {Redirect} from 'react-router-dom'


 class AddEditForm extends React.Component {

    constructor(props){
        super(props)

        props.editElement ?
        this.state={
            id : props.editElement.id,
            category: props.editElement.category,
            name: props.editElement.name,
            price: props.editElement.price,
            description: props.editElement.description,
            dimensions: props.editElement.dimensions,
            quantity: props.editElement.quantity,
            imageUrl: props.editElement.imageUrl,
            imageUrl2: props.editElement.imageUrl2,
            imageUrl3: props.editElement.imageUrl3,
            redirect : false
        }
        :
        this.state={
            name: '',
            price: '',
            description: '',
            dimensions: '',
            quantity: '',
            imageUrl: '',
            imageUrl2: '',
            imageUrl3: '',
            redirect : false
        }
    }

    
    handleSubmit = async event => {
        const collectionId = this.props.collectionId
        const category = this.props.collectionId
        event.preventDefault()
        const {id, name, price, description, dimensions, quantity, imageUrl, imageUrl2, imageUrl3} = this.state
        const element = {
                        category,
                        name,
                        price,
                        description,
                        dimensions,
                        imageUrl,
                        imageUrl2,
                        imageUrl3,
                        quantity
                        }
        const present = await findElement(collectionId, id)
        if( present.length !== 0){
            await updateElement(element, id)
        }else{
            await addElement('produse', element)
        }
        this.setState({redirect: true, name: '', price: '', description: '', dimensions: '', quantity: '', imageUrl: '', imageUrl2: '', imageUrl3: ''})

    }

    handleChange = event => {

        const {value, name} = event.target

        this.setState({[name]: value})
    }

    handleIntChange = event => {

        const {value, name} = event.target
        
        let intValue = parseInt(value);
    
        this.setState({[name]: isNaN(intValue) ? '' : intValue})
    }

    render(){

        if(!this.state.redirect){
        return(
            <ProductData>
                <h2>Date produs</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='name' 
                        type='name' 
                        value={this.state.name} required 
                        handleChange={this.handleChange}
                        label='NAME'
                    />
                    
                    <FormInput 
                        name='price' 
                        type='price' 
                        value={this.state.price} required 
                        handleChange={this.handleIntChange}
                        label='PRICE'
                    />

                    <FormInput 
                        name='description' 
                        type='description' 
                        value={this.state.description} required 
                        handleChange={this.handleChange}
                        label='DESCRIPTION'
                    />

                    <FormInput 
                        name='dimensions' 
                        type='dimensions' 
                        value={this.state.dimensions} required 
                        handleChange={this.handleChange}
                        label='DIMENSIONS'
                    />

                    <FormInput 
                        name='quantity' 
                        type='quantity' 
                        value={this.state.quantity} required 
                        handleChange={this.handleIntChange}
                        label='QUANTITY'
                    />

                    <FormInput 
                        name='imageUrl' 
                        type='imageUrl' 
                        value={this.state.imageUrl} required 
                        handleChange={this.handleChange}
                        label='ImageUrl'
                    />
                    
                    <FormInput 
                        name='imageUrl2' 
                        type='imageUrl2' 
                        value={this.state.imageUrl2} required 
                        handleChange={this.handleChange}
                        label='ImageUrl2'
                    />
                    
                    <FormInput 
                        name='imageUrl3' 
                        type='imageUrl3' 
                        value={this.state.imageUrl3} required 
                        handleChange={this.handleChange}
                        label='ImageUrl3'
                    />
                    
                    <Button>
                    <CustomButton type='submit'>
                
                        ADD</CustomButton>
                    </Button>
                </form>
            </ProductData>

        )}else{
            return(
                <Redirect to='/admin/options/produse' />
            )
        }
    }
}

export default AddEditForm