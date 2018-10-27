import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MenuAppBar from '../../components/Menu/MenuAppBar/MenuAppBar';
import BotaoAdicionar from '../../components/generic/BotaoAdicionar/BotaoAdicionar';
import CriarManifestacao from '../CriarManifestacao/CriarManifestacao';
import Manual from '../Manual/Manual'
import Feed from '../Feed/Feed'

export default class Home extends React.Component {
    _renderNavBar() {
        return <MenuAppBar onLogout={this.makeLogout} />;
    }

    _renderButton() {
        return <BotaoAdicionar link='/criar-manifestacao' />
    }

    render() {
        return (
            <div>
                {this._renderNavBar()}
                {this._renderButton()}
                <Switch>
                    <Route path="/inicial" exact component={Feed} />
                    <Route path='/pesquisar' exact component={Home} />
                    <Route path='/minhas-organizacoes' exact component={Home} />
                    <Route path='/minhas-manifestacoes' exact component={Home} />
                    <Route path='/criar-manifestacao' exact component={CriarManifestacao} />
                    <Route path='/manifestacao/:id' exact component={Home} />
                    <Route path='/manual' exact component={Manual} />
                    <Redirect to="/" />
                </Switch>
            </div>)
    }
}