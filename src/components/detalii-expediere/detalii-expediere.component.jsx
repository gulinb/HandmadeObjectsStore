import React from 'react'
 import FormInput from '../form-input/form-input.component'
 import CustomButton from '../custom-button/custom-button.component'
 import {ProductData, Button} from './detalii-expediere.styles'
import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { addElement, findComanda, findElement, updateElement } from '../../mySql/mySql.utils'


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
        let stillAvailable = true
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
                        total: total+20,
                        comandaProcesata
                        }

        let avb = async() => {
            for (const item of cartItems) {
                let dbItem = await findElement(item.category, item.id)
                console.log(dbItem[0].quantity)
                console.log(item.quantity)
                if(dbItem[0].quantity < item.quantity)
                    stillAvailable = false
        }
    }

    await avb()

    
    
    let executa = async () => {if(stillAvailable){
        
        console.log("stillAvailable:"+stillAvailable)
            await addElement('comenzi', comanda)
            const comandaPlasata = await findComanda(nume, prenume, total+20)
            
            console.log(comandaPlasata[0])
            
            cartItems.forEach( async item => {
                const produsComandat ={
                    idComanda: comandaPlasata[0].id,
                    numeProdus: item.name,
                    pret: item.price,
                    cantitate: item.quantity
                }
                let dbItem = await findElement(item.category, item.id)
                dbItem[0].quantity = dbItem[0].quantity-item.quantity
                await updateElement(dbItem[0], item.id)
                await addElement('comenziProduse', produsComandat)
            })
        }else{
            alert("Unele din produsele selectate nu mai sunt disponibile!\n Comanda nu a fost procesata!")
        }

    }

    await executa()

        this.setState({nume: '',prenume: '',adresa: '',oras: '',judet: '',telefon: '',adresaEmail: '',modalitatePlata: ''})
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
                    
                    <h3>Alege metoda de plata : </h3>
                    <label for="card">
                        <input type="radio" id="card" name="modalitatePlata" value="card" required onChange={this.handleChange}></input>
                        Plata online cu card
                    </label>
                    <br></br>
                    <label for="ramburs">
                        <input type="radio" id="ramburs" name="modalitatePlata" value="ramburs" required onChange={this.handleChange}></input>
                        Plata ramburs
                    </label>
                    <br></br>
                    
                    
                    <Button>
                    <CustomButton type='submit'>
                
                        Finalizeaza comanda!</CustomButton>
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