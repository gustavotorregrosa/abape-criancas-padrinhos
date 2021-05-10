import React, { useContext, useEffect } from 'react'
import NavBar from '../../components/admin/misc/navbar-logado'
import { connect } from 'react-redux'
import UserContext from '../../contexts/UserContext'

const AdminInicialPage = props => {

    const user = useContext(UserContext)

    // useEffect(() => {
    //     props.history.push('/admin/login')
    //     // console.log(user.getUsuario().email)
    //     // if(!user.getUsuario().email){
    //     //     props.history.push('/admin/login')
    //     // }
    // }, [])
    
    return (<div>
        <NavBar />
        <h3>admin inicial</h3>
    </div>)

    // return (<div>
    //     <Switch>
    //       <Route path="/admin/login" component={AdminPageLogin} />
    //       {/* <Route path="/admin/padrinhos" component={PadrinhoAdminPage} />
    //       <Route path="/admin/apadrinhamento" component={ApadrinhamentoAdminPage} /> */}
    //       {/* <Route path="/admin" component={AdminIndexPage} /> */}
    //     </Switch>
    //   </div>)
    
}

const mapStateToProps = state => {
    return {
        usuario: state.autenticacao.usuario
    }
}

export default connect(mapStateToProps)(AdminInicialPage)