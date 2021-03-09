
 import React from 'react'
 import FormInput from '../form-input/form-input.component'
 import CustomButton from '../custom-button/custom-button.component'
 import {ProductData, Button} from './add-edit-form.styles.jsx'
 import {addElement, removeElement} from '../../firebase/firebase.utils'
 import {Redirect} from 'react-router-dom'


 class AddEditForm extends React.Component {

    constructor(props){
        super(props)

        console.log(props)

        props.editElement ?
        this.state={
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
        const id = this.props.collectionId
        event.preventDefault()
        const {name, price, description, dimensions, quantity, imageUrl, imageUrl2, imageUrl3} = this.state
        const element = {
                        name,
                        price,
                        description,
                        dimensions,
                        quantity,
                        imageUrl,
                        imageUrl2,
                        imageUrl3
                        }
        try{
            if(this.props.editElement){
                await removeElement(id, this.props.editElement)
            }
            await addElement( id , element)
            this.setState({redirect: true, name: '', price: '', description: '', dimensions: '', quantity: '', imageUrl: '', imageUrl2: '', imageUrl3: ''})
        }catch(error){
            console.log(error)
        }

      
    }

    handleChange = event => {

        const {value, name} = event.target

        this.setState({[name]: value})
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
                        handleChange={this.handleChange}
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
                        handleChange={this.handleChange}
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