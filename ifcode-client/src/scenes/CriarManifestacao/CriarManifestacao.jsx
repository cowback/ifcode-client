import React from 'react';
import MapComponent from '../../components/mapComponent/map-container';
import CriarManifestacaoForm from './CriarManifestacaoForm/CriarManifestacaoForm';

export default class CriarManifestacao extends React.Component {
  constructor() {
    super();
    this.state = {
      goToMap: false,
      manifestacao: {},
      organizacao: {}
    };
    this.setManifestacao = this.setManifestacao.bind(this);
    this.saveLocal = this.saveLocal.bind(this);
  }

  saveLocal(latitude, longitude) {

    console.log(latitude);
    console.log(longitude);
    
    let manifestacao = this.state.manifestacao;
    manifestacao.latitude = latitude;
    manifestacao.longitude = longitude;

    this.setState({
      manifestacao: manifestacao
    });
  }

  _saveManifestacao() {
    // TODO chamar api
  }

  setManifestacao(data) {
    let manifestacao = {
      titulo: data.titulo,
      descricao: data.descricao,
      imagem: data.imagem,
      data: data.data
    };

    let organizacao = {
      name: data.organizacaoName
    };

    this.setState({
      goToMap: true,
      manifestacao: manifestacao,
      organizacao: organizacao
    });
  }

  render() {
    return (<div>
      {this.state.goToMap ?
        <MapComponent salvarLocalizacao={this.saveLocal} /> :
        <CriarManifestacaoForm setData={this.setManifestacao} />}
    </div>)
  }
}