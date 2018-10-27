import React, { Component } from "react"
import Icon from "@material-ui/icons/Lock"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class CriarManifestacaoForm extends Component {
    state = {}
    render() {
        return (
            <div className="form-nova-lista">
                <h5>Crie uma nova manifestação!</h5>
                <div className="form-nova-lista-div">
                    <TextField
                        className="TextField-mappit"
                        type="text"
                        name="nome"
                        label="Nome da Manifestação"
                        value={this.state.nome}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-nova-lista-div">
                    <TextField
                        className="TextField-mappit"
                        type="textarea"
                        name="descricao"
                        label="Descrição (Opcional)"
                        value={this.state.descricao}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-nova-lista-div switch-div">
                    <div className="label-switch">
                        <Icon />
                        <span>Privada</span>
                    </div>
                    <div className="switch-mappit switch">
                        <label>
                            <TextField
                                type="checkbox"
                                onChange={() =>
                                    this.handleChangeCheckBox(this.state.privacidade)
                                }
                                name="privacidade"
                                value={this.state.privacidade}
                            />
                            <span className="lever" />
                        </label>
                    </div>
                </div>
                <br />
                <div className="form-nova-lista-div">
                    <Button
                        className="button-mappit"
                        onClick={this.onClickContinuarButton}
                    >
                        Continuar
                    </Button>
                </div>
            </div>
        )
    }
}