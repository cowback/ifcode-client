import CONFIG from '../config';
import axios from 'axios';
import UsuarioLogado from '../models/UsuarioLogado';
import LoginError from '../errors/LoginError';
import jwt_decode from 'jwt-decode';

export default class LoginService {
    static login(nome, email, foto) {
        return axios
            .post(`${CONFIG.API_URL_BASE}/public/login`, {
                nome,
                email,
                foto
            })
            .then(result => {
                let token = result.data.token;
                let decoded = jwt_decode(token);
                const usuarioLogado = new UsuarioLogado(
                    decoded.id,
                    token
                );
                localStorage.setItem('idUser', result.data.id);
                LoginService._setUsuarioLogado(usuarioLogado);
                return usuarioLogado;
            })
            .catch(error => {
                throw new LoginError(error.response.data);
            });
    }

    static logout() {
        localStorage.removeItem('USUARIO_LOGADO');
        localStorage.removeItem('idUser');
    }

    static getUsuarioLogado() {
        const saved = localStorage.getItem('USUARIO_LOGADO');

        if (!!saved) {
            const parsed = JSON.parse(saved);
            return new UsuarioLogado(parsed.id, parsed.email, parsed.token);
        }
        return null;
    }

    static _setUsuarioLogado(usuarioLogado) {
        localStorage.setItem('USUARIO_LOGADO', JSON.stringify(usuarioLogado));
    }
}