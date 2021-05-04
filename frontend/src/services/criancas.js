import React, { Component, useState } from 'react';
import * as actions from '../redux/actions/index'
import { connect } from 'react-redux'
import store from '../redux/store'

class CriancaService extends Component {

    http = null

    setHttp = http => this.http = http

    // constructor(props) {
    //     super(props)
    // }

    getCriancas = async () => {
        const params = {
            url: '/criancas',
            method: 'get'
        }

        let criancas = await this.http.doFetch(params)
        await this.espera(5000)
        return criancas
    }

    espera = async t => new Promise((success, reject) => {
        setTimeout(() => {
            success()
        }, t)
    }) 

    deleteCriancas = async ({ id, nome }) => new Promise((success, reject) => {
        setTimeout(() => {
            let criancas = this.state.criancas.filter(el => el.id != id)
            this.setState({ criancas })
            success({ id, nome })
        }, 1000)
    })


    deleteCrianca = async (crianca) => {
        let params = {
            url: '/criancas/' + crianca.id,
            method: 'delete'
        }
        await this.espera(1000)
        let dataCrianca = await this.http.doFetch(params)
        return dataCrianca
    }

    salvarCrianca = async (crianca) => {
        console.log(crianca)
        let params = {
            url: '/criancas',
            method: 'post',
            data: { ...crianca }
        }
        if(crianca.id){
            params = {
                ...params,
                method: 'put',
                url: '/criancas/' + crianca.id
            }
        }
        
        let dataCrianca = await this.http.doFetch(params)
        await this.espera(1000)

        return dataCrianca
    }
}

export default CriancaService