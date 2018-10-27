import React from "react"

import './Botao.css'

const KratosBotao = props => {
    return (
        <button
            {...props}
            className={`kratos-button ${props.className}`}
        >
            {props.children}
        </button>
    )
}

export default KratosBotao