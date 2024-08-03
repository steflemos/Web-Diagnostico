import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'; 

const Home = () => {
  return (
    <div className='home-container'>
      <div className='text-container'>
        <h1 className='title'>SISTEMA DE GESTÃO ESCOLAR</h1>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        <Link to="/cadastro">
          <button className='button'>IR PARA CADASTRO DE ALUNO</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
