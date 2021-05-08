import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/index/navbar'
import '../assets/materialize.css'
import { connect } from 'react-redux'
import CriancaContext from '../contexts/CriancaContext'
import PadrinhoContext from '../contexts/PadrinhoContext'

const ApadrinhamentoPage = props => {

  const criancaService = useContext(CriancaContext)
  const padrinhoService = useContext(PadrinhoContext)

  const [listaCriancas, setListaCriancas] = useState([])
  const [listaPadrinhos, setListaPadrinhos] = useState([])
  const [loading, setLoading] = useState(true)

  const [apadrinhamento, setApadrinhamento] = useState([])

  const isCriancaApadrinhadaPorPadrinho = (crianca, padrinho) => {
    let isApadrinhada = false
    apadrinhamento.map(ap => {
      if(ap.padrinho == padrinho._id && ap.crianca == crianca._id){
        isApadrinhada = true
      }
    })

    return isApadrinhada
  }

  const apadrinhar = (crianca, padrinho) => {
    let novoApadrinhamento = [
      ...apadrinhamento
    ]

    novoApadrinhamento.push({
      padrinho: padrinho._id,
      crianca: crianca._id
    })

    setApadrinhamento(novoApadrinhamento)
  }

  const desapadrinhar = (crianca, padrinho) => {
    let novoApadrinhamento = apadrinhamento.filter(ap => {
      if(ap.padrinho == padrinho._id && ap.crianca == crianca._id){
        return false
      }

      return true
    })

    setApadrinhamento(novoApadrinhamento)
  }

  const toggleApadrinhamento = (crianca, padrinho) => {
    if(isCriancaApadrinhadaPorPadrinho(crianca, padrinho)){
      return desapadrinhar(crianca, padrinho)
    }

    return apadrinhar(crianca, padrinho)
  }

  const listagemCriancaPorPadrinho = crianca => {
    return listaPadrinhos.map(padrinho => {
      return ( <td>
        <label>
          <input type="checkbox"
          checked={isCriancaApadrinhadaPorPadrinho(crianca, padrinho)}
          onChange={e => {
            // e.preventDefault()
            toggleApadrinhamento(crianca, padrinho)
          }} />
          <span></span>
        </label>
      </td>)
    })
  }

  const listaFormatadaCriancas = () => {
    return listaCriancas.map(crianca => {
      return (<tr>
        <th>{crianca.nome}</th>
        {listagemCriancaPorPadrinho(crianca)}
      </tr>  
      
      )
    })
  }

  const listaFormatadaPadrinhos = () => {
    return listaPadrinhos.map(padrinho => {
      return (<th>{padrinho.nome}</th>)
    })
  }


  const listarPadrinhos = async () => {
    // setLoading(true)
    const data = await padrinhoService.getPadrinhos()
    setListaPadrinhos(data)
    // setLoading(false)
}

  const listarCriancas = async () => {
    // setLoading(true)
    const data = await criancaService.getCriancas()
    setListaCriancas(data)
    setLoading(false)
  }

  useEffect(async () => {
    await listarPadrinhos()
    await listarCriancas()

    // setInterval(() => {console.log(apadrinhamento)}, 5000)


  }, [])

  const loader = () => {
    if (loading) {
        return (
            <div class="progress">
                <div style={{
                    width: '100%'
                }} class="indeterminate"></div>
            </div>)
    }

    return null
}


  const tabela = () => (
  <div>
    
    <table className="responsive-table-2 highlight">
    <thead>
      <tr>
        <th></th>
        {listaFormatadaPadrinhos()}
      </tr>
    </thead>

    <tbody>
      {listaFormatadaCriancas()}
    </tbody>
  </table>

  <a class="waves-effect waves-light btn"><i class="material-icons left">compare_arrows</i>salvar</a>
  </div>
  )


  return (<div>
    <NavBar {...props} />
    
    <br />
    <div className="container">
      <h6>Apadrinhamento</h6>
      { loading ? loader() : tabela()}
    </div>
  </div>)



}


const mapStateToProps = state => {
  return {
    usuario: state.autenticacao.usuario
  }
}

export default connect(mapStateToProps)(ApadrinhamentoPage)