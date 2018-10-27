import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MenuAppBar from '../../components/Menu/MenuAppBar/MenuAppBar';
import BotaoAdicionar from '../../components/generic/BotaoAdicionar/BotaoAdicionar';
import CriarManifestacao from '../CriarManifestacao/CriarManifestacao';
import Manual from '../Manual/Manual'
import Feed from '../Feed/Feed'
import Manifestacao from '../Manifestacao/Manifestacao'

export default class Home extends React.Component {
    _renderNavBar() {
        return <MenuAppBar onLogout={this.makeLogout} />;
    }

    render() {
        return (
            <div>
                {this._renderNavBar()}
                <Switch>
                    <Route path="/inicial" exact component={Feed} />
                    <Route path='/minhas-organizacoes' exact />
                    <Route path='/minhas-manifestacoes' exact />
                    <Route path='/criar-manifestacao' exact component={CriarManifestacao} />
                    <Route path='/manifestacao/:id' exact component={Manifestacao} />
                    <Route path='/manual' exact component={Manual} />
                    <Redirect to="/" />
                </Switch>
            </div>)
    }
}