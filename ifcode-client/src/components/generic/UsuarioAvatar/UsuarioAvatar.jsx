import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    width: 30,
    height: 30
  },
  leftAvatar: {
    width: 45,
    height: 45
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  hugeAvatar: {
    width: 80,
    height: 80
  }
};

class UsuarioAvatar extends React.Component {
  render() {
    const { classes } = this.props;

    let className;
    if (this.props.type === 'big') {
      className = classes.bigAvatar;
    } else if (this.props.type === 'huge') {
      className = classes.hugeAvatar;
    } else if (this.props.type === 'left') {
      className = classes.leftAvatar;
    } else {
      className = classes.avatar;
    }

    return (
      <Avatar
        alt={this.props.usuario.nome}
        src={this.props.usuario.foto}
        className={className}
      />
    );
  }
}

UsuarioAvatar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UsuarioAvatar);
