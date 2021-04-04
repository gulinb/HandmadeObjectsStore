import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, Title, SubTitle, TitleContainer} from './header.styles'
import { setCurrentUser } from '../../redux/user/user.actions'


const Header =({currentUser, hidden, setCurrentUser}) => (

    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
            <TitleContainer>
                <Title> O R F E V R U </Title>
                <SubTitle>Obiecte handmade</SubTitle>
            </TitleContainer>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={() => setCurrentUser(null)}>SIGN OUT</OptionLink>
                :
                null
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Header)