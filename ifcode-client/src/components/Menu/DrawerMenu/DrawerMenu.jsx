import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListaOpcoesMenu from '../ListaOpcoesMenu/ListaOpcoesMenu';
import UsuarioService from '../../../services/UsuarioService';
import InformacoesUsuario from '../InformacoesUsuario/InformacoesUsuario';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
  colorPrimary: {
    backgroundColor: '#454040'
  },
  list: {
    width: 250
  }
};

class DrawerMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      usuario: {}
    };
  }

  componentDidMount() {
    // UsuarioService.buscarUsuarioLogado().then(result => {
    //   this.setState({
    //     usuario: result
    //   });
    // });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <SwipeableDrawer
          open={this.props.open}
          onClose={this.props.onChange}
          onOpen={this.props.onChange}
        >
          <AppBar position='static' className={classes.colorPrimary}>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color='inherit'
                aria-label='Fechar'
                onClick={this.props.onChange}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className={classes.list}>
            <InformacoesUsuario usuario={this.state.usuario} />
          </div>
          <div className={classes.list}>
            <ListaOpcoesMenu
              onLogout={this.props.onLogout}
              onClick={this.props.changeScenario}
            />
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerMenu);
