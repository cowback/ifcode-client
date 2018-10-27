import React from 'react'
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import CONFIG from '../../config';
import AlertaService from '../../services/AlertaService';
import LoginService from '../../services/LoginService';
import Logo from '../../components/generic/Logo/Logo';
import './Login.scss';

const style = {
    width: '80%',
    cursor: 'pointer',
    background: 'rgb(209, 72, 54)',
    color: 'rgb(255, 255, 255)',
    padding: '10px 0',
    borderradius: '2px',
    border: '1px solid transparent'
};

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            usuarioLogado: false,
            mostrarToastAlerta: false,
            mensagemErro: ''
        };
        this.onGoogleResponse = this.onGoogleResponse.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    componentDidMount() {
        if (this._verifyUserLogged()) {
            this._goToHome();
        }
    }

    _verifyUserLogged() {
        return !!LoginService.getUsuarioLogado();
    }

    _goToHome() {
        this.setState({
            usuarioLogado: true
        });
    }

    onGoogleResponse(response) {
        LoginService.login(
            response.profileObj.name,
            response.profileObj.email,
            response.profileObj.imageUrl
        ).then(result => {
            this._goToHome();
        });
    }

    onFailure(error) {
        AlertaService.error('Algo deu errado!', 'Tente novamente.');
    }

    render() {
        if (this.state.usuarioLogado) {
            return <Redirect to='/incial' />;
        }
        return (
            <div className='login'>
                <Logo />
                <GoogleLogin
                    clientId={CONFIG.GOOGLE_CLIENT_ID}
                    onSuccess={this.onGoogleResponse}
                    onFailure={this.onFailure}
                    style={style}
                >
                    <span className='login-google-button'>Entrar com Google</span>
                </GoogleLogin>
            </div>
        );
    }
}