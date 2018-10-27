import React from 'react';
import LocationSearchInput from './location-search-input';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import CONFIG from '../../config';

import './map-container.scss';

class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      address: '',
      markAdd: false,
      distancia: 50,
      location: {
        lat: 0,
        lng: 0
      }
    };
    this.recentralizarMapaAposPesquisa = this.recentralizarMapaAposPesquisa.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.continue = this.continue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.pesquisarLocais = this.pesquisarLocais.bind(this);
  }

  componentDidMount() {
    this._centralizarMapaNaPosicaoAtualDoUsuario();
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(location, map) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
    map.panTo(location);
    const latitude = map.center.lat();
    const longitude = map.center.lng();
    this.setState({
      markAdd: true,
      location: location,
      latitude: latitude,
      longitude: longitude,
      hasInitialPosition: false,
      hasNewPosition: true
    });
  }

  _centralizarMapaNaPosicaoAtualDoUsuario() {
    if (navigator && navigator.geolocation) {
      const that = this;
      navigator.geolocation.getCurrentPosition(function (pos) {
        const coords = pos.coords;
        that.setState({
          latitude: coords.latitude,
          longitude: coords.longitude,
          hasInitialPosition: true,
          hasNewPosition: false
        });
      });
    }
  }

  recentralizarMapaAposPesquisa(latitude, longitude, address) {
    this.setState({
      latitude: latitude,
      longitude: longitude,
      hasInitialPosition: false,
      hasNewPosition: true,
      address: address
    });
  }

  _carregarMarkNaPosicaoAtual() {
    return (
      <Marker
        onClick={this.onMarkerClick}
        title={
          this.state.hasInitialPosition ? 'Sua posição' : 'Local pesquisado'
        }
        name={
          this.state.hasInitialPosition ? 'Sua posição' : 'Local pesquisado'
        }
        position={{ lat: this.state.latitude, lng: this.state.longitude }}
      />
    );
  }

  _carregarInfoDoMark() {
    return (
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
      >
        <div>
          <h1 className={'info-mark'}>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    );
  }

  _carregarComponenteDoMapa() {
    return (
      <div className={this.setClasseDaDiv()}>
        <Map
          google={this.props.google}
          onClick={(t, map, c) => this.onMapClicked(c.latLng, map)}
          style={{ width: '100%', height: '100%', position: 'relative' }}
          className={'map'}
          initialCenter={{
            lat: this.state.latitude,
            lng: this.state.longitude
          }}
          center={{
            lat: this.state.latitude,
            lng: this.state.longitude
          }}
          zoom={15}
        >
          {this._carregarMarkNaPosicaoAtual()}
          {this._carregarInfoDoMark()}
        </Map>
      </div>
    );
  }

  _carregarBotao() {
    if (!this.props.pesquisarLocais) {
      return (
        <button
          className='button-mappit btn waves-effect waves-light'
          type='submit'
          name='action'
          onClick={this.continue}
        >
          Próximo
        </button>
      );
    } else {
      return (
        <div className='opcoes-pesquisa-container'>
          <div className='opcoes-pesquisa-map'>
            <button
              className='button-mappit btn waves-effect waves-light btn-opcao-pesquisa'
              type='submit'
              name='action'
              onClick={this.pesquisarLocais}
            >
              Pesquisar
            </button>
            <button
              className='btn waves-effect waves-light btn-opcao-pesquisa button-mappit'
              type='submit'
              name='action'
              onClick={this.props.voltar}
            >
              Voltar
            </button>
          </div>
        </div>
      );
    }
  }

  _carregarRangeDePesquisa() {
    if (this.props.pesquisarLocais) {
      return (
        <div className='div-range-pesquisa'>
          <p className='range-field'>
            <span className='range_distancia'>Distância pesquisada</span>
            <input
              className='input-mappit'
              name='range_distancia'
              type='range'
              value={this.state.distancia}
              onChange={this.handleChange}
              min='1'
              max='100'
            />
            <span className='range_distancia'>{this.state.distancia}Km</span>
          </p>
        </div>
      );
    }
  }

  handleChange(e) {
    this.setState({ distancia: e.target.value });
  }

  pesquisarLocais() {
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;
    const distancia = this.state.distancia;
    this.props.pesquisarLocais(latitude, longitude, distancia);
  }

  continue() {
    this.props.salvarLocalizacao(this.state.latitude, this.state.longitude);
  }

  setClasseDaDiv() {
    if (this.props.pesquisarLocais) return 'map-div-pesquisa';
    return 'map-div';
  }

  render() {
    return (
      <div className='map-container'>
        {(this.state.hasInitialPosition || this.state.hasNewPosition) && (
          <div>
            <LocationSearchInput
              pesquisarLocal={this.recentralizarMapaAposPesquisa}
            />
            {this._carregarComponenteDoMapa()}
            {this._carregarBotao()}
            {this._carregarRangeDePesquisa()}
          </div>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: CONFIG.GOOGLE_MAPS_API
})(MapContainer);
