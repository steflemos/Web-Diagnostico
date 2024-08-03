import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home";
import Cadastro from "../Pages/Cadastro";
import ListagemAlunos from '../Pages/Listagem';

const AppRoutes = () => {
    return (
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/listagem" element={<ListagemAlunos/>} />
          </Routes>
    </Router>
  );
};

export default AppRoutes;