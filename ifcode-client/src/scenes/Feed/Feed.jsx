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
        // TODO: BUSCAR AQUI AS MANIFESTAÇÕES
        const { data } = await manifestacaoService.listar()
        const manifestacoes = [
            {
                id: 1,
                name: 'Unidos contra o Fascismo',
                description: 'Estamos reunidos contra o fascismo porque não podemos admitir esse tipo de ação em nosso país e nossas vidas, atingindo àqueles que amamos e nossos entes queridos. Venha se juntar a nós no dia 30/10 às 18hrs, no local indicado.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Sad-pug.jpg',
                organizacao: {
                    name: 'PSOL',
                },
            },
            {
                id: 2,
                name: 'Debate sobre democracia',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_gNQZlJUO5oHlti0jqI1SH0g3SDh_4mrw2oRsp-tFuptCEy8',
                description: '',
                organizacao: {
                    name: 'PDT',
                },
            },
        ]
        this.setState({ manifestacoes: data })
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