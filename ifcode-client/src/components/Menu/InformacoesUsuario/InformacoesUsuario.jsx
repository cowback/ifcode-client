import React from 'react';
import UsuarioAvatar from '../../generic/UsuarioAvatar/UsuarioAvatar';
import './InformacoesUsuario.scss';

export default class extends React.Component {
  render() {
    return (
      <div className='menu-informacoes-usuario'>
        {/* <UsuarioAvatar type='huge' usuario={this.props.usuario} /> */}
        <div className='menu-informacoes-usuario-contato'>
          <h2 className='nome-usuario'>Nome</h2>
          <h4 className='email-usuario'>e-mail</h4>
        </div>
      </div>
    );
  }
}
