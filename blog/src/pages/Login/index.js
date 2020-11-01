import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';

export default function Login() {
  return (
    <div className='container'>
      <section className='login-content'>
        <h2>LOGIN</h2>
        <div className='form-content'>
          <form >
            <div className='input-block'>
              <label for='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className='input-block'>
              <label for='password'>Senha</label>
              <input type='password' id='password' />
            </div>
            <div className='button'>
              <button type='submit'>Entrar</button>
            </div>
          </form>
        </div>
        <div className='text-register'>
          <p>Não possui uma conta? <Link to='/register'><span className='link-register'>cadastre-se</span></Link>!</p>
        </div>
      </section>
    </div> 
  )
};