import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/index/navbar'
import { connect } from 'react-redux'
import Tabela from '../../components/misc/tabela'
import ModalCriaEdita from '../../components/admin/criancas/modalCriaEdita'
import ModalDeleta from '../../components/admin/criancas/modalDelete'
import CriancaContext from '../../contexts/CriancaContext'

const CriancaPage = props => {

    const criancaService = useContext(CriancaContext)
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

    const listaCriancas = async () => {
        setLoading(true)
        const data = await criancaService.getCriancas()
        setData(data)
        setLoading(false)
    }

    useEffect(async () => {
        await listaCriancas()
    }, [])

    // const ativaLoading = l => setLoading(l)

    const openModalNew = ev => {
        ev.preventDefault()
        const e = new CustomEvent('cria-criancas')
        document.dispatchEvent(e)
    }

    return (<div>
        <NavBar {...props} />
        <div className="container">
            <h4>Crianças</h4>
            <a className="waves-effect right" onClick={e => openModalNew(e)}><i className="medium material-icons">add_box</i></a>
            <Tabela campos={campos} data={data} loading={loading} eventName="criancas" />
            <ModalCriaEdita listaCriancas={() => listaCriancas()} />
            <ModalDeleta listaCriancas={() => listaCriancas()} />
        </div>
    </div>)
}

const mapStateToProps = state => {
    return {
        usuario: state.autenticacao.usuario
    }
}

export default connect(mapStateToProps)(CriancaPage)