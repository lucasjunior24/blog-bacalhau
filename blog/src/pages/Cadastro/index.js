import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';

export default function Login() {
  return (
    <div className='container'>
      <section className='register-content'>
        <h2>CADASTRO</h2>
        <div className='form-content'>
          <form action='http://localhost:3333/users' method="POST">
            <div className='input-block'>
              <label for='name'>Nome</label>
              <input type='text' id='name' name='name' required />
            </div>
            <div className='input-block'>
              <label for='email'>Email</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div class='input-block'>
              <label for='password'>Senha</label>
              <input type='password' id='password' name='password' required />
            </div>
            <div class='button'>
              <button type='submit'>Cadastrar</button>
            </div>
          </form>
        </div>
        <div className='text-login'>
          <p>Já possui uma conta? <Link to='/login'><span className='link-login'>clique aqui</span></Link>!</p>
        </div>
      </section>
    </div>
  )
};