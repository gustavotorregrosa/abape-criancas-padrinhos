import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/index/navbar'
import '../assets/materialize.css'
import { connect } from 'react-redux'

const ApadrinhamentoPage = props => {

    const tabela = () => (<table className="responsive-table highlight">
        <thead>
          <tr>
              <th>Criança/ Padrinho</th>
              <th>Padrinho 1</th>
              <th>Padrinho 2</th>
              <th>Padrinho 3</th>
              <th>Padrinho 4</th>
              <th>Padrinho 5</th>
              <th>Padrinho 6</th>
              <th>Padrinho 7</th>
              <th>Padrinho 8</th>
              <th>Padrinho 9</th>
              <th>Padrinho 10</th>
              <th>Padrinho 11</th>
              <th>Padrinho 12</th>
              <th>Padrinho 13</th>
              <th>Padrinho 14</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Crianca 1</th>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
          </tr>

          <tr>
            <th>Crianca 2</th>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
          </tr>


          <tr>
            <th>Crianca 3</th>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
          </tr>


          <tr>
            <th>Crianca 4</th>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
          </tr>


          <tr>
            <th>Crianca 5</th>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
          </tr>


          <tr>
            <th>Crianca 6</th>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
          </tr>


          <tr>
            <th>Crianca 7</th>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
            <td> 
              <label>
                <input type="checkbox" />
                <span></span>
              </label>
            </td>
          </tr>
          
         </tbody>
      </table>)

    return (<div>
        <NavBar {...props} />
        <br/>
        <div className="container"> 
   
                {tabela()}
     
        </div>
       
        
        
        
        </div>)


}


const mapStateToProps = state => {
    return {
        usuario: state.autenticacao.usuario
    }
}

export default connect(mapStateToProps)(ApadrinhamentoPage)