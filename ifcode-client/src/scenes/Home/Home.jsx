import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MenuAppBar from '../../components/Menu/MenuAppBar/MenuAppBar';
import BotaoAdicionar from '../../components/generic/BotaoAdicionar/BotaoAdicionar';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

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

                <Switch>
                    <Route path="/inicial" exact />
                    <Route path='/pesquisar' exact component={Home} />
                    <Route path='/minhas-organizacoes' exact component={Home} />
                    <Route path='/minhas-manifestacoes' exact component={Home} />
                    <Route path='/criar-manifestacao' exact component={Home} />
                    <Route path='/manifestacao/:id' exact component={Home} />
                    <Route path='/manual' exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            </div>)
    }
}