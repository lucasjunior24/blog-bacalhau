import React, { Component } from 'react';
// const Visitante = require('../models/visitantes');
import api from '../../api';
import './styles.css';
// import axios from 'axios';

// baseURL: 'http://localhost:8081'

// import Form from './pages/Form/index'

class TodasPerguntas extends Component {
    state = {
        users: [],
        perguntas: [],
        respostas: [],
    }

    async componentDidMount() {

        // const pergunta_id = 1

        const users = await api.get(`/users`)
        const perguntas = await api.get('/perguntas');
        const respostas = await api.get('/respostas');

        // console.log(response.data);
        this.setState({ users: users.data });
        this.setState({ perguntas: perguntas.data });
        this.setState({ respostas: respostas.data });
    }

    render() {
        const { users } = this.state;
        const { perguntas } = this.state;
        const { respostas } = this.state;
        console.log(users);
        return (
            <div>
                <h1>Listar Perguntas</h1>
                {/* <h3>{response.data.name}</h3> */}

                <ul>
                    {perguntas.map(p =>
                        // <li key={p.id}>
                        // {
                        respostas.map(res =>
                            // <li key={res.id}>

                            users.map(usuario => {
                                if ((usuario.id === p.user_id)
                                    && (res.pergunta_id === p.id)
                                    && (res.user_id === usuario.id)) {
                                    return (
                                        <li key={p.id}>
                                            <h2>Usuario: {usuario.name}</h2>
                                            <h2>Perguntou: {p.pergunta}</h2>
                                            <h2>Bacalhau: <br />{res.resposta}</h2>
                                        </li>
                                    )
                                }
                            })

                            // </li>
                        )
                        // }
                        /* </li> */
                    )}
                </ul>

            </div>
        );
    }
}

export default TodasPerguntas;