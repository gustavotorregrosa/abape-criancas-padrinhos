import React, { useEffect } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router'
// import PageLogin from './pages/login'
import IndexPage from './pages/inicial/index'
// import PadrinhoPage from './pages/padrinhos/padrinho'
// import CriancaPage from './pages/crianca'
// import AdminPage from './pages/admin/admin'
import UserService from './services/user'
import UserContext from './contexts/UserContext'
import HttpContext from './contexts/HttpContext'
import CriancaContext from './contexts/CriancaContext'
import PadrinhoContext from './contexts/PadrinhoContext'
import CriancaService from './services/criancas'
import PadrinhoService from './services/padrinhos'
import HttpService from './services/http'
import ApadrinhamentoService from './services/apadrinhamentos'
import ApadrinhamentoContext from './contexts/ApadrinhamentoContext'

function App(props) {
  const userService = new UserService(props)
  const criancaService = new CriancaService(props)
  const padrinhoService = new PadrinhoService(props)
  const apadrinhamentoService = new ApadrinhamentoService(props)
  const httpService = new HttpService(props)
  httpService.setUser(userService)
  criancaService.setHttp(httpService)
  padrinhoService.setHttp(httpService)
  apadrinhamentoService.setHttp(httpService)

  useEffect(() => {

    userService.runFirstCheck()

    // setTimeout(() => {
    //   if (!userService.getUsuario().email) {
    //     props.history.push('/login')
    //   }else{
    //     props.history.push('/admin')
    //   }
    // }, 50)

  }, [])

  return (<div>
    <HttpContext.Provider value={httpService}>
      <UserContext.Provider value={userService}>
      <ApadrinhamentoContext.Provider value={apadrinhamentoService}>
        <PadrinhoContext.Provider value={padrinhoService}>
          <CriancaContext.Provider value={criancaService}>
            <Switch>
              {/* <Route path="/login" component={PageLogin} /> */}
              {/* <Route path="/admin/*" component={AdminPage} /> */}
              {/* <Route path="/padrinho" component={PadrinhoPage} /> */}
              {/* <Route path="/apadrinhamento" component={ApadrinhmantoPage} /> */}
              {/* <Route path="/padrinho/*" component={PadrinhoPage} /> */}
              <Route path="/*" component={IndexPage} />
            </Switch>
          </CriancaContext.Provider>
        </PadrinhoContext.Provider>
        </ApadrinhamentoContext.Provider>
      </UserContext.Provider>
    </HttpContext.Provider>
  </div>)
}

export default withRouter(App)
