import React, { useContext, useEffect } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router'
import { connect } from 'react-redux'
import UserContext from '../../contexts/UserContext'
import PageInicial from './inicial'
import AdminLoginPage from './login'

const AdminIndexPage = props => {

    const user = useContext(UserContext)

    useEffect(() => {
        // props.history.push('/admin/login')
        // console.log(user.getUsuario().email)
        // if(!user.getUsuario().email){
        //     props.history.push('/admin/login')
        // }
    }, [])
    
    // return (<div>
    //     <NavBar />
    //     <h3>admin index</h3>
    // </div>)

    return (<div>
        <Switch>
          <Route path="/admin/login" component={AdminLoginPage} />
          {/* <Route path="/admin/padrinhos" component={PadrinhoAdminPage} />
          <Route path="/admin/apadrinhamento" component={ApadrinhamentoAdminPage} /> */}
          <Route exact path="/admin/" component={PageInicial} />
        </Switch>
      </div>)
    
}

const mapStateToProps = state => {
    return {
        usuario: state.autenticacao.usuario
    }
}

export default connect(mapStateToProps)(AdminIndexPage)