import React, { useContext, useEffect } from 'react'
import NavBar from '../../components/admin/misc/login/navbar'
import { connect } from 'react-redux'
import UserContext from '../../contexts/UserContext'

const AdminLoginPage = props => {

    const user = useContext(UserContext)
    
    return (<div>
        <NavBar />
        <h3>admin login index</h3>
    </div>)
    
}

const mapStateToProps = state => {
    return {
        usuario: state.autenticacao.usuario
    }
}

export default connect(mapStateToProps)(AdminLoginPage)