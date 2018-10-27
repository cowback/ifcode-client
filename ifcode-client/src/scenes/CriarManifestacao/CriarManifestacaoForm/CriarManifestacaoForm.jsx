import React, { Component } from "react"
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
import Button from '../../../components/generic/Botao/Botao'
import InputLabel from '@material-ui/core/InputLabel'

import './CriarManifestacaoForm.css'

export default class CriarManifestacaoForm extends Component {
    state = { organizacao: '', organizacaoName: '' }

    constructor() {
        super()
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
    }

    handleChangeSelect(event) {
        this.setState({ [event.target.name]: event.target.value, organizacaoName: JSON.parse(event.target.value).name })
    }

    _renderMenuItems() {
        // TODO: buscar organizações do usuário
        const organizacoes = [
            {
                id: 1,
                name: 'PSOL Unidos'
            },
            {
                id: 2,
                name: 'Novo'
            },
            {
                id: 3,
                name: 'Kratos'
            },
        ]
        return organizacoes.map(o => {
            return (
                <option key={o.id} value={JSON.stringify(o)}>{o.name}</option>
            )
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="form-manifestacao">
                <h5>Crie uma nova manifestação!</h5>
                <div className="form-manifestacao-div">
                    <TextField
                        className="TextField-mappit"
                        type="text"
                        name="nome"
                        label="Nome da Manifestação"
                        value={this.state.nome}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-manifestacao-div">
                    <TextField
                        className="TextField-mappit"
                        type="textarea"
                        name="descricao"
                        label="Descrição (Opcional)"
                        value={this.state.descricao}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-manifestacao-div">
                    <TextField
                        className="TextField-mappit"
                        type="file"
                        name="descricao"
                        label="Imagem (Opcional)"
                        value={this.state.descricao}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-manifestacao-div">
                    <InputLabel htmlFor="select-organizacao">Organização:</InputLabel>
                    <Select
                        className="select-organizacao"
                        native
                        open={this.state.open}
                        value={this.state.organizacaoName}
                        onChange={this.handleChangeSelect}
                        inputProps={{
                            name: 'organizacao',
                            id: 'select-organizacao'
                        }}
                    >
                        {this._renderMenuItems()}
                    </Select>
                </div>
                <br />
                <div className="form-manifestacao-div">
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