import React, { useState } from 'react';

const Listagem = () => {
  const [alunos, setAlunos] = useState([]);

  return (
    <div>
      <h1>Listagem de Alunos</h1>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>
            {aluno.nome} - {aluno.idade} - {aluno.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listagem;
