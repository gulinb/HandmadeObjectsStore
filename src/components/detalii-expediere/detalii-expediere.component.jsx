import React from 'react'
 import FormInput from '../form-input/form-input.component'
 import CustomButton from '../custom-button/custom-button.component'
 import {ProductData, Button} from './detalii-expediere.styles'
import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { addElement, findComanda, findElement, payment, updateElement } from '../../mySql/mySql.utils'
import { defineMessage, setTransactionId, toggleMessage } from '../../redux/shop/shop.actions'
import { clearItemFromCart, removeItem } from '../../redux/cart/cart.actions'
import {selectTransactionId} from '../../redux/shop/shop.selector'

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
            comandaProcesata: 0,
            showMessage: this.props.showMessage,
            message: '',
            awb: '',
            card: 0
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault()
        let stillAvailable = true
        let produseInCos = true
        const {cartItems, total, toggleMessage, defineMessage, clearItemFromCart, removeItemFromCart, transactionId} = this.props

        console.log('cartItems + total')
        console.log(cartItems, total)
        const {nume, prenume, adresa, oras, judet, telefon, adresaEmail, modalitatePlata, comandaProcesata, awb} = this.state
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
                        awb,
                        comandaProcesata
                        }

        let avb = async() => {
            if(cartItems[0]){
                for (const item of cartItems) {
                    let dbItem = await findElement(item.category, item.id)
                    if(dbItem[0]){
                        if(dbItem[0].quantity < item.quantity){
                            const no = item.quantity - dbItem[0].quantity
                            for(var i = 0 ; i<no ; i++){
                                removeItemFromCart(item)
                            }
                            stillAvailable = false
                        }
                    }else{
                        clearItemFromCart(item)
                        stillAvailable = false
                        }
            }}else{
                produseInCos = false
                }
        }

        let executa = async () => {
        
            if(produseInCos){
            if(stillAvailable){
            
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
                    defineMessage("Comanda plasata!")
                    clearItemFromCart(item)
                })
            }else{
                defineMessage("Unele din produsele selectate nu mai sunt disponibile! Comanda nu a fost plasata! Cosul a fost actualizat!")
            }}else{
                defineMessage("Nu aveti produse in cos!")
            }
            
            toggleMessage()
        }

        const makeTransaction = async () => {
                const {setTransactionId} = this.props
                /*eslint-disable no-undef*/
                var paylike = Paylike('2d12a410-500a-47a3-8696-facd32554583');
                /*eslint-enable no-undef*/
                await paylike.popup({
                    currency: 'RON',
                    amount: (total+20)*100,
                    custom: comanda
                    }, async function( err, r ){
                        if (err){
                            await setTransactionId('')
                            return console.warn(err);
                        }
                        await setTransactionId(r.transaction.id)
                        console.log(r);	// { transaction: { id: ... } }
                    
                       const status = await payment(r.transaction.id, (total+20)*100)

                       if(status.paymentSuccess){
                            await executa()
                        }else{
                            defineMessage("Plata nu a putut fi procesata!")
                            toggleMessage()
                        }
                    
                    })

                }
                        
        if(modalitatePlata === "card")
        {
            await avb()

            if(produseInCos && stillAvailable){
            const setScript = async () => {
            const script = document.createElement("script");
    
            script.src = "https://sdk.paylike.io/3.js";
            script.async = true;
    
            document.body.appendChild(script);

            script.onload =async () => await makeTransaction()

             return(
                console.log("ceva magic")
            )
            }

            await setScript()
            console.log("transactionId : "+transactionId)

        }else{
            executa()
        }

    }

        if(modalitatePlata === "ramburs"){

            await avb()

            await executa()
        }

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
    total: selectCartTotal,
    transactionId: selectTransactionId
})

const mapDispatchToProps = dispatch => ({
    toggleMessage: () => dispatch(toggleMessage()),
    defineMessage: (message) => dispatch(defineMessage(message)),
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    removeItemFromCart: (item) => dispatch(removeItem(item)),
    setTransactionId: (id) => dispatch(setTransactionId(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(DetaliiExpediere)