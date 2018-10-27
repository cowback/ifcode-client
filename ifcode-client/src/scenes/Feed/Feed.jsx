import React, { Component } from 'react';
import CardManifestacao from '../../components/CardManifestacao/CardManifestacao'
import BotaoAdicionar from '../../components/generic/BotaoAdicionar/BotaoAdicionar'
import manifestacaoService from '../../services/ManifestacaoService'

import './Feed.scss'

export default class Feed extends Component {
    state = { manifestacoes: [] }

    componentDidMount() {
        this._buscarManifestacoes()
    }

    async _buscarManifestacoes() {
        const { data } = await manifestacaoService.listar()
        this.setState({ manifestacoes: data.data })
    }

    _renderButton() {
        return <BotaoAdicionar link='/criar-manifestacao' />
    }

    _renderManifestacoes() {
        const { manifestacoes } = this.state
        return manifestacoes.map(m => {
            return (
                <CardManifestacao key={m.id} manifestacao={m} organizacao={m.organizacao} />
            )
        })
    }

    render() {
        return (
            <div className="feed">
                {this._renderButton()}
                {this._renderManifestacoes()}
            </div>)
    }
}