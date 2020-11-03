import React from 'react';
import { Link } from "react-router-dom";

// import './styles.css';

export default function Form() {
  return (
    <div className='container'>
      <section className='form-content'>
        <h2>Faça uma Pergunta</h2>
        <div className='form-content'>
          <form post=''>
            <div className='input-block'>
              <label for='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className='input-block'>
              <textarea></textarea>
            </div>
            <div className='button'>
              <button type='submit'>Enviar</button>
            </div>
          </form>
        </div>
        <div className='text-register'>
          <p>Voltar para a Home <Link to='/home'><span className='link-home'>clique aqui</span></Link></p>
        </div>
      </section>
    </div>
  )
};