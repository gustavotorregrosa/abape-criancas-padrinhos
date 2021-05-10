import React, { useContext, useEffect } from 'react'
import NavBar from '../../components/inicial/navbar'
import { connect } from 'react-redux'
import UserContext from '../../contexts/UserContext'

const IndexPage = props => {

    const user = useContext(UserContext)

    const redirect = (e, pagina) => {
        e.preventDefault()
        props?.history?.push('/' + pagina)
    }
    
    return (<div>
        <NavBar {...props}/>
        <div className="container">
            <br/> <br/>
            <a class="waves-effect waves-light btn">Crianças</a>
            <br/> <br/>
            <a class="waves-effect waves-light btn">Padrinhos</a>
            <br/> <br/>
            <a onClick={e => redirect(e, 'admin')} class="waves-effect waves-light btn">Administrador</a>
        </div>
    </div>)
}

const mapStateToProps = state => {
    return {
        usuario: state.autenticacao.usuario
    }
}

export default connect(mapStateToProps)(IndexPage)