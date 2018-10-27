import React from 'react';
import MapComponent from '../../components/mapComponent/map-container';
import CriarManifestacaoForm from './CriarManifestacaoForm/CriarManifestacaoForm';
import manifestacaoService from '../../services/ManifestacaoService'

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
    let manifestacao = this.state.manifestacao;
    manifestacao.latitude = latitude;
    manifestacao.longitude = longitude;

    this.setState({
      manifestacao: manifestacao
    }, () => this._saveManifestacao());
  }

  async _saveManifestacao() {
    await manifestacaoService.criar(this.state.manifestacao)
    // TODO alertar, limpar campos
  }

  setManifestacao(data) {
    let manifestacao = {
      name: data.name,
      description: data.description,
      image: data.imageUrl,
      date: data.date,
      dddCellphone: '51',
      cellphone: '987654321',
      email: localStorage.getItem('email') || 'teste@teste.com',
      site: 'www.kratos.club',
      securityCommittee: [1],
    }

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