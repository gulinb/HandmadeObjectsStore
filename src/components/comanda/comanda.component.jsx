import React from 'react'
import {ComandaContainer, ComandaHeader, IDBlock, NumeBlock, PrenumeBlock, AdresaBlock, OrasBlock, JudetBlock, TelefonBlock, EmailBlock, PlataBlock, TotalBlock, DataBlock, ProduseBlock, StatusComandaBlock} from './comanda.styles'



const Comanda = ({comanda}) => { 

const {id, nume, prenume, adresa, oras, judet, telefon, adresaEmail, modalitatePlata, total, data, comandaProcesata} = comanda
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
                        <span>Produse</span>
                    </ProduseBlock>
                    <StatusComandaBlock>
                        <span>{comandaProcesata}</span>
                    </StatusComandaBlock>                    
                </ComandaHeader>
            </ComandaContainer>
        )
}


export default Comanda