import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/index/navbar'
import { connect } from 'react-redux'
import Tabela from '../../components/misc/tabela'
import ModalCriaEdita from '../../components/admin/padrinhos/modalCriaEdita'
import ModalDeleta from '../../components/admin/padrinhos/modalDelete'
import PadrinhoContext from '../../contexts/PadrinhoContext'

const PadrinhoPage = props => {

    const padrinhoService = useContext(PadrinhoContext)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const campos = [
        {
            name: 'nome',
            label: 'Nome'
        },
        {
            name: 'email',
            label: 'E-mail'
        },
        {
            name: 'sobre',
            label: 'Sobre'
        },
        {
            name: 'actions',
            label: 'Ações'
        },
    ]

    const listaPadrinhos = async () => {
        setLoading(true)
        const data = await padrinhoService.getPadrinhos()
        setData(data)
        setLoading(false)
    }

    useEffect(async () => {
        await listaPadrinhos()
    }, [])

    // const ativaLoading = l => setLoading(l)

    const openModalNew = ev => {
        ev.preventDefault()
        const e = new CustomEvent('cria-padrinhos')
        document.dispatchEvent(e)
    }

    return (<div>
        <NavBar {...props}/>
        <div className="container">
            <h4>Padrinhos</h4>
            <a className="waves-effect right" onClick={e => openModalNew(e)}><i className="medium material-icons">add_box</i></a>
            <Tabela campos={campos} data={data} loading={loading} eventName="padrinhos" />
            <ModalCriaEdita listaPadrinhos={() => listaPadrinhos()} />
            <ModalDeleta listaPadrinhos={() => listaPadrinhos()} />
        </div>
    </div>)
}

const mapStateToProps = state => {
    return {
        usuario: state.autenticacao.usuario
    }
}

export default connect(mapStateToProps)(PadrinhoPage)