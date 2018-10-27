import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const styles = {
  button: {
    position: 'fixed',
    bottom: 10,
    right: 10,
    zIndex: 10
  },
  color: {
    color: '#ffffff',
    backgroundColor: '#b5985a',
    '&:hover': {
      backgroundColor: '#b5985ac7'
    }
  }
};

class BotaoAdicionar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Link to={this.props.link}>
        <Button
          variant='fab'
          aria-label='add'
          className={classNames(classes.button, classes.color)}
        >
          <AddIcon />
        </Button>
      </Link>
    );
  }
}

BotaoAdicionar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BotaoAdicionar);
