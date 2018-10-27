import React from 'react'
import './Manifestacao.scss'
import Button from '../../components/generic/Botao/Botao'
import AlertService from '../../services/AlertaService'

export default class Manifestacao extends React.Component {
    constructor() {
        super()
        this.state = {
            manifestacao: {},
            text: 'Participar',
            participando: false,
            alert: true
        }
        this.onClickContinuarButton = this.onClickContinuarButton.bind(this);
    }

    componentWillMount() {
        if (this.props.match.params.id) {
            this._getManifestacao();
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

    _getManifestacao() {
        // TODO chamar a service
        this.setState({
            manifestacao: {
                id: 1,
                name: 'Unidos contra o Fascismo',
                description: 'Estamos reunidos contra o fascismo porque não podemos admitir esse tipo de ação em nosso país e nossas vidas, atingindo àqueles que amamos e nossos entes queridos. Venha se juntar a nós no dia 30/10 às 18hrs, no local indicado.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Sad-pug.jpg',
                organizacao: {
                    name: 'PSOL',
                },
            }
        })
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