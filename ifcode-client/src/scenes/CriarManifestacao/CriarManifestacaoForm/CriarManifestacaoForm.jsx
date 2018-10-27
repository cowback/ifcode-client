import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Button from '../../../components/generic/Botao/Botao'
import InputLabel from '@material-ui/core/InputLabel'

import './CriarManifestacaoForm.scss'

export default class CriarManifestacaoForm extends Component {
    state = { organizacoes: [], organizacao: '', organizacaoName: '' }

    constructor() {
        super()
        this.handleChangeFile = this.handleChangeFile.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        this.onClickContinuarButton = this.onClickContinuarButton.bind(this)
    }

    componentDidMount() {
        this._buscarOrganizacao()
    }

    handleChangeFile(event) {
        if (event.target.files) {
            let file = event.target.files[0]
            let fileReader = new FileReader()

            fileReader.readAsDataURL(file)

            fileReader.onload = (fileLoadedEvent) => {
                let image = fileLoadedEvent.target.result

                this.setState({
                    image: image
                })
            }
        }
    }

    handleChangeSelect(event) {
        this.setState({ [event.target.name]: event.target.value, organizacaoName: JSON.parse(event.target.value).name })
    }

    onClickContinuarButton() {
        this.props.setData(this.state);
    }

    _buscarOrganizacao() {
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

        this.setState({ organizacoes })
    }

    _renderMenuItems() {
        const { organizacoes } = this.state
        return organizacoes.map(o => {
            return (
                <option key={o.id} value={JSON.stringify(o)}>{o.name}</option>
            )
        })
    }

    render() {
        return (
            <div className='form-manifestacao'>
                <h3>Crie uma nova manifestação!</h3>
                <div className='form-manifestacao-div'>
                    <TextField
                        className='TextField-mappit'
                        type='text'
                        name='titulo'
                        label='Título da Manifestação'
                        value={this.state.titulo}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='form-manifestacao-div'>
                    <TextField
                        id='date'
                        label='Data'
                        type='datetime-local'
                        value={this.state.data}
                        onChange={this.handleChange}
                        className='TextField-mappit'
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className='form-manifestacao-div'>
                    <TextField
                        className='TextField-mappit'
                        type='textarea'
                        name='descricao'
                        label='Descrição (Opcional)'
                        value={this.state.descricao}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='form-manifestacao-div'>
                    <TextField
                        className='TextField-mappit'
                        type='file'
                        name='image'
                        label='Imagem (Opcional)'
                        accept="image/*"
                        value={this.state.file}
                        onChange={this.handleChangeFile}
                    />
                </div>
                <div className='form-manifestacao-div'>
                    <InputLabel htmlFor='select-organizacao'>Organização:</InputLabel>
                    {console.log(this.state.organizacaoName)}
                    <Select
                        className='select-organizacao'
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
                <div className='form-manifestacao-div'>
                    <Button
                        className='button-mappit'
                        onClick={this.onClickContinuarButton}
                    >
                        Continuar
                    </Button>
                </div>
            </div>
        )
    }
}