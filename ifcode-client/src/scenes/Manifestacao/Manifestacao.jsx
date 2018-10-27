import React from 'react'
import './Manifestacao.scss'
import Button from '../../components/generic/Botao/Botao'
import AlertService from '../../services/AlertaService'
import manifestacaoService from '../../services/ManifestacaoService';

export default class Manifestacao extends React.Component {
    constructor() {
        super()
        this.state = {
            manifestacao: {
                organizacao: {},
            },
            text: 'Participar',
            participando: false,
            alert: true,
        }
        this.onClickContinuarButton = this.onClickContinuarButton.bind(this);
    }

    componentWillMount() {
        if (this.props.match.params.id) {
            this._getManifestacao(this.props.match.params.id);
        }
    }

    onClickContinuarButton() {
        this.setState({
            text: 'Participando',
            participando: true,

        });
        if (this.state.alert) {
            AlertService.success('Sucesso!', 'Continue exercendo seu direito a manifestar');
            this.setState({
                alert: false
            })
        }
    }

    async _getManifestacao(id) {
        const { data } = await manifestacaoService.carregar(id)
        this.setState({ manifestacao: data.data })
    }

    render() {
        return (
            <div className='manifestacao'>
                <div className='header'>
                    <img className='image' src={this.state.manifestacao.image} alt='Manifestação' />
                    <h3 className='name' >{this.state.manifestacao.name}</h3>
                </div>
                <div className='content'>
                    <div className='date'>
                        <p>Data: {this.state.manifestacao.date}</p>
                    </div>
                    <div className='organization'>
                        <p>Organização: {this.state.manifestacao.organizacao.name}</p>
                    </div>
                    <div className='description'>
                        <p>{this.state.manifestacao.description}</p>
                    </div>
                    <div className='participar'>
                        <Button
                            className={`button-participar ${this.state.participando}`}
                            onClick={this.onClickContinuarButton}
                        >
                            {this.state.text}
                        </Button>
                    </div>
                </div>
            </div>)
    }
}