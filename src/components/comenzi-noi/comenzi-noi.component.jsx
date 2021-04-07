import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectComenziNoiForPreview } from '../../redux/comenzi/comenzi.selector'
import {ComenziNoiContainer, ComenziHeader, IDBlock, NumeBlock, PrenumeBlock, AdresaBlock, OrasBlock, JudetBlock, TelefonBlock, EmailBlock, PlataBlock, TotalBlock, DataBlock, ProduseBlock, StatusComandaBlock, AWBBlock} from './comenzi-noi.styles'
import Comanda from '../comanda/comanda.component'
import { connect } from 'react-redux'

class ComenziNoi extends React.Component {
    



    render(){
        
        const {comenzi} = this.props
        console.log(comenzi)

    return(
            <ComenziNoiContainer>
                <ComenziHeader>
                    <IDBlock>
                        ID
                    </IDBlock>
                    <NumeBlock>
                        <span>Nume</span>
                    </NumeBlock>
                    <PrenumeBlock>
                        <span>Prenume</span>
                    </PrenumeBlock>
                    <AdresaBlock>
                        <span>Adresa</span>
                    </AdresaBlock>
                    <OrasBlock>
                        <span>Oras</span>
                    </OrasBlock>
                    <JudetBlock>
                        <span>Judet</span>
                    </JudetBlock>
                    <TelefonBlock>
                        <span>Telefon</span>
                    </TelefonBlock>
                    <EmailBlock>
                        <span>Email</span>
                    </EmailBlock>
                    <PlataBlock>
                        <span>Plata</span>
                    </PlataBlock>
                    <TotalBlock>
                        <span>Total</span>
                    </TotalBlock>
                    <DataBlock>
                        <span>Data</span>
                    </DataBlock>
                    <ProduseBlock>
                        <span>Produse</span>
                    </ProduseBlock>
                    <AWBBlock>
                        <span>AWB</span>
                    </AWBBlock>
                    <StatusComandaBlock>
                        <span>Comanda Procesata ?</span>
                    </StatusComandaBlock>                    
                </ComenziHeader>
                {
                    comenzi.map(comanda => <Comanda key={comanda.id} comanda={comanda} />)
                }
            </ComenziNoiContainer>
    )
}
}


const mapStateToProps = createStructuredSelector({
    comenzi: selectComenziNoiForPreview
})



export default connect(mapStateToProps)(ComenziNoi)