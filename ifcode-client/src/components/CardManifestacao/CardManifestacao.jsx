import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import UsuarioAvatar from '../generic/UsuarioAvatar/UsuarioAvatar';
import { Link } from 'react-router-dom';

import './CardManifestacao.scss'

const styles = theme => ({
    card: {
        width: 360,
        textAlign: 'left'
    },
    actions: {
        display: 'flex'
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        }),
        marginLeft: 'auto'
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    content: {
        padding: 0
    },
    header: {
        padding: '5%',
        display: 'flex',
        color: '#454040',
        '&:hover, &:focus, &:focus-within, &:active': {
            color: '#b5985a'
        }
    },
    descricao: {
        marginLeft: 'auto'
    },
    info: {
        margin: 0
    },
    infoLista: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20
    }
});

class CardManifestacao extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        console.log(this.props);

        const { classes } = this.props;

        return (
            <div className="card">
                <Card className={classes.card}>
                    <Link to={`/manifestacao/${this.props.manifestacao.id}`}>
                        <div className={classes.header}>
                            {/* <UsuarioAvatar type='big' usuario={this.props.lista.usuario} /> */}
                            <div className={classes.infoLista}>
                                <h5 className={classes.info}>{this.props.manifestacao.name}</h5>
                                <h6 className={classes.info}>
                                    {this.props.organizacao.nome}
                                </h6>
                            </div>
                        </div>
                    </Link>
                    <CardContent className={classes.content}>
                        <Link to={`/manifestacao/${this.props.manifestacao.id}`}>
                            <img className="imagem" src={this.props.manifestacao.image} alt='Manifestação' />
                        </Link>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        {!!this.props.manifestacao.description ? (
                            <div className={classes.description}>
                                <span>Descrição</span>
                                <IconButton
                                    className={classnames(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded
                                    })}
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label='Descricao'
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </div>
                        ) : null}
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
                        <CardContent>
                            <span>{this.props.manifestacao.description}</span>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

CardManifestacao.propTypes = {
    classes: PropTypes.object.isRequired,
    manifestacao: PropTypes.object.isRequired,
    organizacao: PropTypes.object.isRequired
};

export default withStyles(styles)(CardManifestacao);
