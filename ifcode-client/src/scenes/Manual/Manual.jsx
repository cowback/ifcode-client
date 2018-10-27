import React from 'react'
import HelpOutline from '@material-ui/icons/HelpOutline'

import './Manual.scss'

const iconStyle = {
    fontSize: 60,
}

const Manual = () => {
    return (
        <div className="Manual">
            <div className="title">
                <HelpOutline className="icon" style={iconStyle} />
                <h3>DICAS GERAIS PARA MANIFESTANTES</h3>
            </div>
            <div className="container">
                <h4>Ações de prevenção e proteção</h4>
                <ul>
                    <li>
                        Preste atenção nos movimentos
                        das forças policiais durante todo
                        o protesto
                    </li>
                    <li>
                        Mantenha distância deles – muitas das
                        prisões arbitrárias aconte - cem nesses
                        contextos
                    </li>
                    <li>
                        É recomendável caminhar em grupo. Planeje
                        pontos de encontro e esteja sempre em contínua
                        comunicação entre todos, além de ter uma
                        pessoa que faça o monitoramento da manifestação
                        à distância, acompanhando notícias pela
                        internet e checando regularmente sua situação
                        e localização.
                    </li>
                    <li>
                        Caso a situação se torne violenta, informe a
                        pessoa que está monitorando; primeiro garanta
                        sua segurança para depois ajudar os demais.
                    </li>
                    <li>
                        Deixe salvo previamente uma mensagem de texto
                        no seu celular para enviar em caso de emergência
                    </li>
                    <li>
                        Não deixe que ninguém tome uma decisão sobre
                        a sua segurança por você.
                        Você é responsável por ela.
                    </li>
                    <li>
                        Cuidado com o retorno para casa,
                        pois muitas prisões têm ocorrido
                        neste momento.
                    </li>
                </ul>
            </div>
            <div className="container">
                <h4>Que fazer se a manifestação for <br></br> reprimida ou dispersada?</h4>
                <ul>
                    <li>
                        Você tem direitos, mas em situação de violência é melhor evitar o confronto.
                    </li>
                    <li>
                        Mantenha distância dos perímetros estabelecidos pelas forças policiais
                    </li>
                    <li>
                        Redobre a atenção e os cuidados
                        com a sua segurança para cobrir
                        violações que estejam ocorrendo
                    </li>
                    <li>
                        Documente. São nesses momentos em que geralmente
                        as forças de segurança cometem erros de
                        conduta e violações
                    </li>
                </ul>
            </div>
            <div className="container">
                <h4>Perguntas básicas antes <br></br> de cobrir um protesto</h4>
                <ul>
                    <li>
                        Qual o motivo do protesto?
                    </li>
                    <li>
                        Existem grupos identificados claramente?
                    </li>
                    <li>
                        Existiu violência em manifestações anteriores?
                    </li>
                    <li>
                        Conhece o perfil dos manifestantes?
                    </li>
                    <li>
                        Quais as atividades que acontecerão durante o protesto?
                    </li>
                    <li>
                        Qual será a rota?
                    </li>
                    <li>
                        Há vias de evacuação durante o trajeto?
                    </li>
                    <li>
                        Quais os meios de transporte público para
                        se chegar e deixar a manifestação?
                    </li>
                    <li>
                        Quais os hospitais e delegacias policiais próximos?
                    </li>
                </ul>
            </div>

            <p>
                -> Estabeleça comunicação com os amigos ou
                <br></br>colegas que você sabe que acompanharão a
                manifestação
            </p>
        </div>
    )
}

export default Manual