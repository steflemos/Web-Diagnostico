import React, { useState } from 'react';
import '../Styles/Cadastro.css'; 

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [alunos, setAlunos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoAluno = { nome, idade, email };
    setAlunos([...alunos, novoAluno]);
    setNome('');
    setIdade('');
    setEmail('');
  };

  return (
    <div className="cadastro-container">
      <h1 className='TitleCadastro'>Cadastro de Aluno</h1>
      <form onSubmit={handleSubmit} className="form-cadastro">
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Idade:</label>
          <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit" className="btn-cadastrar">Cadastrar</button>
      </form>
      {alunos.length > 0 && (
        <div className="tabela-container">
          <h2>Dados dos Alunos</h2>
          <table className="tabela-alunos">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno, index) => (
                <tr key={index}>
                  <td>{aluno.nome}</td>
                  <td>{aluno.idade}</td>
                  <td>{aluno.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cadastro;
