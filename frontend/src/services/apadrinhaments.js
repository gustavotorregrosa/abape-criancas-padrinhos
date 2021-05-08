import React, { Component, useState } from 'react';

class ApadrinhamentoService extends Component {

    http = null

    setHttp = http => this.http = http

    getApadrinhamentos = async () => {
        const params = {
            url: '/apadrinhamentos',
            method: 'get'
        }

        let apadrinhamentos = await this.http.doFetch(params)
        await this.espera(1000)
        return apadrinhamentos
    }

    espera = async t => new Promise((success, reject) => {
        setTimeout(() => {
            success()
        }, t)
    })

    salvarApadrinhamentos = async (apadrinhamentos) => {
        let params = {
            url: '/apadrinhamentos',
            method: 'post',
            data: { ...apadrinhamentos }
        }

        let dataApadrinhamentos = await this.http.doFetch(params)
        return dataApadrinhamentos
    }


    // deletePadrinho = async (padrinho) => {
    //     let params = {
    //         url: '/padrinhos/' + padrinho.id,
    //         method: 'delete'
    //     }
    //     await this.espera(1000)
    //     let dataPadrinho = await this.http.doFetch(params)
    //     return dataPadrinho
    // }

    // salvaPadrinho = async (padrinho) => {
    //     let params = {
    //         url: '/padrinhos',
    //         method: 'post',
    //         data: { ...padrinho }
    //     }
    //     if(padrinho.id){
    //         params = {
    //             ...params,
    //             method: 'put',
    //             url: '/padrinhos/' + padrinho.id
    //         }
    //     }
        
    //     let dataPadrinho = await this.http.doFetch(params)
    //     await this.espera(1000)

    //     return dataPadrinho
    // }
}

export default ApadrinhamentoService