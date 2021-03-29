import React from 'react'
 import FormInput from '../form-input/form-input.component'
 import CustomButton from '../custom-button/custom-button.component'
 import {ProductData, Button} from './detalii-expediere.styles'
import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { addElement, findComanda } from '../../mySql/mySql.utils'


 class DetaliiExpediere extends React.Component {

    constructor(props){
        super(props)

        this.state={
            nume: '',
            prenume: '',
            adresa: '',
            oras: '',
            judet: '',
            telefon: '',
            adresaEmail: '',
            modalitatePlata: '',
            total: '',
            data: '',
            comandaProcesata: 0
        }
    }
    
    
    handleSubmit = async event => {
        event.preventDefault()
        
        const {cartItems, total} = this.props

        console.log('cartItems + total')
        console.log(cartItems, total)
        const {nume, prenume, adresa, oras, judet, telefon, adresaEmail, modalitatePlata, comandaProcesata,} = this.state
        const comanda = {
                        nume,
                        prenume,
                        adresa,
                        oras,
                        judet,
                        telefon,
                        adresaEmail,
                        modalitatePlata,
                        total,
                        comandaProcesata
                        }


       await addElement('comenzi', comanda)
       const comandaPlasata = await findComanda(nume, prenume, total)

       console.log(comandaPlasata[0])
       
       cartItems.forEach( async item => {
           const produsComandat ={
               idComanda: comandaPlasata[0].id,
               numeProdus: item.name,
               pret: item.price,
               cantitate: item.quantity
           }

           await addElement('comenziProduse', produsComandat)
       })

        this.setState({name: '', price: '', description: '', dimensions: '', quantity: '', imageUrl: '', imageUrl2: '', imageUrl3: ''})

    }

    handleChange = event => {

        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render(){

        return(
            <ProductData>
            <h2>DETALII EXPEDIERE :</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='nume' 
                        type='nume' 
                        value={this.state.nume} required 
                        handleChange={this.handleChange}
                        label='NUME'
                    />
                    
                    <FormInput 
                        name='prenume' 
                        type='prenume' 
                        value={this.state.prenume} required 
                        handleChange={this.handleChange}
                        label='PRENUME'
                    />

                    <FormInput 
                        name='adresa' 
                        type='adresa' 
                        value={this.state.adresa} required 
                        handleChange={this.handleChange}
                        label='ADRESA : str. , nr. , bl. , ap. ...'
                    />

                    <FormInput 
                        name='oras' 
                        type='oras' 
                        value={this.state.oras} required 
                        handleChange={this.handleChange}
                        label='LOCALITATE'
                    />

                    <FormInput 
                        name='judet' 
                        type='judet' 
                        value={this.state.judet} required 
                        handleChange={this.handleChange}
                        label='JUDET'
                    />

                    <FormInput 
                        name='telefon' 
                        type='telefon' 
                        value={this.state.telefon} required 
                        handleChange={this.handleChange}
                        label='TELEFON'
                    />
                    
                    <FormInput 
                        name='adresaEmail' 
                        type='email' 
                        value={this.state.adresaEmail} required 
                        handleChange={this.handleChange}
                        label='ADRESA DE EMAIL'
                    />
                    
                    <label for="card">
                        <input type="radio" id="card" name="modalitatePlata" value="card" onChange={this.handleChange}></input>
                        Plata online cu card
                    </label>
                    <br></br>
                    <label for="ramburs">
                        <input type="radio" id="ramburs" name="modalitatePlata" value="ramburs" onChange={this.handleChange}></input>
                        Plata la livrare
                    </label>
                    <br></br>
                    
                    
                    <Button>
                    <CustomButton type='submit'>
                
                        ADD</CustomButton>
                    </Button>
                </form>
            </ProductData>

        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(DetaliiExpediere)