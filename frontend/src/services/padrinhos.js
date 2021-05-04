import React, { Component, useState } from 'react';

class PadrinhoService extends Component {

    http = null

    setHttp = http => this.http = http

    // constructor(props) {
    //     super(props)
    // }

    getPadrinhos = async () => {
        const params = {
            url: '/padrinhos',
            method: 'get'
        }

        let padrinhos = await this.http.doFetch(params)
        await this.espera(1000)
        return padrinhos
    }

    espera = async t => new Promise((success, reject) => {
        setTimeout(() => {
            success()
        }, t)
    }) 


    deletePadrinho = async (padrinho) => {
        let params = {
            url: '/padrinhos/' + padrinho.id,
            method: 'delete'
        }
        await this.espera(1000)
        let dataPadrinho = await this.http.doFetch(params)
        return dataPadrinho
    }

    salvaPadrinho = async (padrinho) => {
        let params = {
            url: '/padrinhos',
            method: 'post',
            data: { ...padrinho }
        }
        if(padrinho.id){
            params = {
                ...params,
                method: 'put',
                url: '/padrinhos/' + padrinho.id
            }
        }
        
        let dataPadrinho = await this.http.doFetch(params)
        await this.espera(1000)

        return dataPadrinho
    }
}

export default PadrinhoService