import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  link: {
    '&:focus, &:focus-within, &:active, &:visited': {
      color: 'rgba(0, 0, 0, 0.5)'
    }
  }
});

class ListaOpcoesMenu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List>
          <Link to='/inicial' className={classes.link}>
            <ListItem button>
              <ListItemText primary='Página inicial' />
            </ListItem>
          </Link>

          <Link to='/pesquisar' className={classes.link}>
            <ListItem button>
              <ListItemText primary='Pesquisar' />
            </ListItem>
          </Link>

          <Link to='/minhas-organizacoes' className={classes.link}>
            <ListItem button>
              <ListItemText primary='Minhas organizações' />
            </ListItem>
          </Link>

          <Link to='/minhas-manifestacoes' className={classes.link}>
            <ListItem button>
              <ListItemText primary='Minhas manifestações' />
            </ListItem>
          </Link>

          <Link to='/manual' className={classes.link}>
            <ListItem button>
              <ListItemText primary='Manual do Demokratoniano' />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <ListItem onClick={this.props.onLogout} button className={classes.link}>
          <ListItemText primary='Sair' />
        </ListItem>
      </div>
    );
  }
}

ListaOpcoesMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListaOpcoesMenu);
