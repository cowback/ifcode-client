import LoginService from './LoginService';
import Usuario from '../models/Usuario';

export default class UsuarioService {

    static buscarUsuarioLogado() {
        const usuarioLogado = LoginService.getUsuarioLogado();
    }

}