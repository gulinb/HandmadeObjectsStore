import React from 'react'
import { GlobalStyle } from './global.styles'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckOutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

import {setCurrentUser} from './redux/user/user.actions'
import TermeniSiConditiiPage from './pages/termeni-si-conditii-page/termeni-si-conditii-page.component'
import SignInPage from './pages/admin-page-login/admin-page-login.component'
import AdminComenziPage from './pages/admin-comenzi-page/admin-comenzi-page.component'
import AddEditPage from './pages/add-edit-products-page/add-edit-products-page.component'
 

class App extends React.Component {

  componentWillUnmount(){
    const {setCurrentUser} = this.props

    setCurrentUser(null)
  }

  render(){
    return (
      <div>
      <GlobalStyle />
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckOutPage} />
          <Route path='/termeni_si_conditii' component={TermeniSiConditiiPage} />
          <Route exact path='/admin' component={SignInPage} />
          <Route path='/admin/comenzi' component={AdminComenziPage} />
          <Route path='/admin/produse' component={AddEditPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
