import React, { useRef, useEffect, useContext } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import UserContext from '../../../contexts/UserContext'

const IndexNavbar = props => {

    let navBarMobile = useRef(null)
    let instance
    let openLoginModal = () => {}

    const userService = useContext(UserContext)

    useEffect(() => {
        instance = M.Sidenav.init(navBarMobile.current, {})
    }, [])

    const redirect = (e, pagina) => {
        e.preventDefault()
        props?.history?.push('/admin/' + pagina)
    }

    const logout = e => {
        e.preventDefault()
        userService.logout()
        props?.history?.push('/')

    }

    return (<div>
        <nav className="black">
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">Abape</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#" onClick={e => redirect(e, 'criancas')}>Crianças</a></li>
                    <li><a href="#" onClick={e => redirect(e, 'padrinhos')}>Padrinhos</a></li>
                    <li><a href="#" onClick={e => redirect(e, 'apadrinhamento')}>Apadrinhamento</a></li>
                    <li><a href="#" onClick={e => logout(e)}>Logout</a></li>
                </ul>
            </div>
        </nav>

        <ul ref={navBarMobile} className="sidenav" id="mobile-demo">
            <li><a href="#" onClick={e => redirect(e, 'criancas')}>Crianças</a></li>
            <li><a href="#" onClick={e => redirect(e, 'padrinhos')}>Padrinhos</a></li>
            <li><a href="#" onClick={e => redirect(e, 'apadrinhamento')}>Apadrinhamento</a></li>
            <li><a href="#" onClick={e => logout(e)}>Logout</a></li>
        </ul>

    </div>)
}

export default IndexNavbar