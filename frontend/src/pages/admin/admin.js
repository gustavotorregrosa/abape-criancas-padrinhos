import React, { useContext, useEffect } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router'
import { connect } from 'react-redux'
import UserContext from '../contexts/UserContext'
import CriancaAdminPage from './admin.crianca'
import PadrinhoAdminPage from './admin.padrinho'
import ApadrinhamentoAdminPage from './admin/admin.apadrinhamento'
import AdminIndexPage from './index'

const AdminPage = props => {

    const user = useContext(UserContext)
    
    return (<div>
      <Switch>
        <Route exact path="/admin/criancas" component={CriancaAdminPage} />
        <Route path="/admin/padrinhos" component={PadrinhoAdminPage} />
        <Route path="/admin/apadrinhamento" component={ApadrinhamentoAdminPage} />
        <Route exact path="/admin" component={AdminIndexPage} />
      </Switch>
    </div>)
}

const mapStateToProps = state => {
    return {
        usuario: state.autenticacao.usuario
    }
}

export default connect(mapStateToProps)(AdminPage)