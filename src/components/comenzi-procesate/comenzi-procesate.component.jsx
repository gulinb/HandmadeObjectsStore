import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectComenziProcesateForPreview } from '../../redux/comenzi/comenzi.selector'
import {ComenziProcesateContainer, ComenziHeader, IDBlock, NumeBlock, PrenumeBlock, AdresaBlock, OrasBlock, JudetBlock, TelefonBlock, EmailBlock, PlataBlock, TotalBlock, DataBlock, ProduseBlock, StatusComandaBlock, AWBBlock} from './comenzi-procesate.styles'
import Comanda from '../comanda/comanda.component'
import { connect } from 'react-redux'

const ComenziProcesate = ({comenzi}) => (

            <ComenziProcesateContainer>
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
                        AWB
                    </AWBBlock>
                    <StatusComandaBlock>
                        <span>Status Comanda</span>
                    </StatusComandaBlock>                    
                </ComenziHeader>
                {
                    comenzi.map(comanda => <Comanda key={comanda.id} comanda={comanda} />)
                }
            </ComenziProcesateContainer>
)


const mapStateToProps = createStructuredSelector({
    comenzi: selectComenziProcesateForPreview
})


export default connect(mapStateToProps)(ComenziProcesate)