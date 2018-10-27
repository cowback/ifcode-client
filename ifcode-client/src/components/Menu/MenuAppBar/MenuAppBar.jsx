import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import { Link } from 'react-router-dom';
import kratosTxt from '../../../assets/kratosTxt.svg';

const styles = {
  root: {
    flexGrow: 1,
    minHeight: 70
  },
  colorPrimary: {
    backgroundColor: '#272727',
    position: 'fixed'
  },
  logo: {
    height: '25px',
    paddingLeft: '5px',
  },
  navbar: {
    paddingLeft: '3px',
    paddingRight: '16px'
  }
};

class MenuAppBar extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: true,
      anchorEl: null,
      open: false
    };
    this.onChangeDrawer = this.onChangeDrawer.bind(this);
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onChangeDrawer() {
    let open = !this.state.open;
    this.setState({
      open
    });
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position='static' className={classes.colorPrimary}>
          <Toolbar className={classes.navbar}>
            <IconButton
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
              onClick={this.onChangeDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Link to='/incial'>
              <Typography
                variant="title"
                color='inherit'
              >
                <img src={ kratosTxt } alt="Kratos" className={classes.logo}/>
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <DrawerMenu
          open={this.state.open}
          onChange={this.onChangeDrawer}
          onLogout={this.props.onLogout}
        />
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
