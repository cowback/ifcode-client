import React from 'react'
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import CONFIG from '../../config';
import LoginService from '../../services/LoginService';
import Logo from '../../components/generic/Logo/Logo';
import './Login.scss';

const style = {
    width: '80%',
    cursor: 'pointer',
    background: 'rgb(209, 72, 54)',
    color: 'rgb(255, 255, 255)',
    padding: '10px 0',
    borderRadius: '15px',
    border: '1px solid transparent'
};

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            usuarioLogado: false,
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
        console.log('NO GO TO HOME')
        this.setState({ usuarioLogado: true });
    }

    onGoogleResponse(response) {
        console.log('NO GOOGLE RESPONSE')
        localStorage.setItem('name', response.profileObj.name)
        localStorage.setItem('email', response.profileObj.email)
        localStorage.setItem('imageUrl', response.profileObj.imageUrl)

        LoginService.login(
            response.profileObj.name,
            response.profileObj.email,
            response.profileObj.imageUrl
        )
        this._goToHome()
    }

    onFailure(error) {
        console.log('NO ERRO', error)
        this._goToHome()
    }

    render() {
        if (this.state.usuarioLogado) {
            console.log('NO RENDER')
            return <Redirect to='/inicial' />;
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