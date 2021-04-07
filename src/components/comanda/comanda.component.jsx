import React from 'react'
import { connect } from 'react-redux'
import {  selectProduseComanda } from '../../redux/comenzi/comenzi.selector'
import {ComandaContainer, ComandaHeader, IDBlock, NumeBlock, PrenumeBlock, AdresaBlock, OrasBlock, JudetBlock, TelefonBlock, EmailBlock, PlataBlock, TotalBlock, DataBlock, ProduseBlock, StatusComandaBlock, AWBBlock, Button, CustomButtonStyle, FormInputStyle} from './comanda.styles'
import {updateComanda} from '../../mySql/mySql.utils'


class Comanda extends React.Component{
    
    constructor(props){
        super(props)

        this.state={
            id:props.comanda.id,
            nume: props.comanda.nume,
            prenume: props.comanda.prenume,
            adresa: props.comanda.adresa,
            oras: props.comanda.oras,
            judet: props.comanda.judet,
            telefon: props.comanda.telefon,
            adresaEmail: props.comanda.adresaEmail,
            modalitatePlata: props.comanda.modalitatePlata,
            total: props.comanda.total,
            data: props.comanda.data,
            awb: props.comanda.awb,
            comandaProcesata: props.comanda.comandaProcesata
        }
    }

    submitFunction = async event => {
        event.preventDefault()

        const {id, nume, prenume, adresa, oras, judet, telefon, adresaEmail, modalitatePlata, total, data, awb} = this.state

        const comandaProcesataObj = {
            nume,
            prenume,
            adresa,
            oras,
            judet,
            telefon,
            adresaEmail,
            modalitatePlata,
            total,
            data,
            awb,
            comandaProcesata: true
        }
        console.log(comandaProcesataObj)

        await updateComanda(comandaProcesataObj, id)

    }

    handleChange = event => {

        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render(){
        
        const {comanda, produse} = this.props 

        const {id, nume, prenume, adresa, oras, judet, telefon, adresaEmail, modalitatePlata, total, data, awb} = comanda
        console.log(awb[0])

        return(
            <ComandaContainer>
                <ComandaHeader>
                    <IDBlock>
                        {id}
                    </IDBlock>
                    <NumeBlock>
                        <span>{nume}</span>
                    </NumeBlock>
                    <PrenumeBlock>
                        <span>{prenume}</span>
                    </PrenumeBlock>
                    <AdresaBlock>
                        <span>{adresa}</span>
                    </AdresaBlock>
                    <OrasBlock>
                        <span>{oras}</span>
                    </OrasBlock>
                    <JudetBlock>
                        <span>{judet}</span>
                    </JudetBlock>
                    <TelefonBlock>
                        <span>{telefon}</span>
                    </TelefonBlock>
                    <EmailBlock>
                        <span>{adresaEmail}</span>
                    </EmailBlock>
                    <PlataBlock>
                        <span>{modalitatePlata}</span>
                    </PlataBlock>
                    <TotalBlock>
                        <span>{total}</span>
                    </TotalBlock>
                    <DataBlock>
                        <span>{data}</span>
                    </DataBlock>
                    <ProduseBlock>
                        {
                            produse.map(produs => <div>{produs.numeProdus} X {produs.cantitate}</div>)
                        }
                    </ProduseBlock>
                    <AWBBlock>

                            <FormInputStyle onChange={this.handleChange} name='awb' 
                            type='awb' 
                            value={this.state.awb} required 
                            handleChange={this.handleChange}
                            label='AWB'/>
                        
                    </AWBBlock>
                    <StatusComandaBlock>
                        <span>
                            <Button>
                                <CustomButtonStyle onClick={this.submitFunction}>OK!</CustomButtonStyle>
                            </Button>
                        </span>
                    </StatusComandaBlock>                  
                </ComandaHeader>
            </ComandaContainer>
        )
}
}


const mapStateToProps = (state, ownProps) => ({
    produse: selectProduseComanda(ownProps.comanda.id)(state)
})

export default connect(mapStateToProps)(Comanda)