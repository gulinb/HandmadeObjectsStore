import React from 'react'



import { FooterContainer, Social, TsC} from './footer.styles'

const Footer = () => (

    
    <FooterContainer>
        
        <TsC to='/termeni_si_conditii'><strong>  Termeni si conditii </strong></TsC>
        
        <Social>
            <a href='https://www.facebook.com/'>
            <img alt='facebookIcon' src="https://img.icons8.com/fluent-systems-filled/48/000000/facebook.png"/>
            </a>
            <a href='https://www.instagram.com/'>
            <img alt='instagramIcon' src="https://img.icons8.com/fluent-systems-filled/48/000000/instagram-new.png"/>
            </a>
            <a href=' '>
            <img alt='telefon' src="https://img.icons8.com/material-rounded/48/000000/whatsapp.png"/>
            </a>
        </Social>

        
    </FooterContainer>
)

export default Footer