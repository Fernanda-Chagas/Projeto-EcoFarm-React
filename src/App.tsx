import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Produtos from './paginas/produtos/Produtos';
import SobreNos from './paginas/sobreNos/SobreNos';
import Formulario from './paginas/formulario/Formulario';
import Fornecedor from './paginas/fornecedor/Fornecedor';
import { CartProvider } from './hooks/useCart';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  useEffect(() => {
    document.title = "EcoFarm";
}, [])

  return (
    <Router>
      <ToastContainer />
      <CartProvider>
      <Navbar />
      <div style={{ minHeight: '100vh' }} id='bg-app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/contato" element={<Formulario />} />
          <Route path="/seja-um-fornecedor" element={<Fornecedor />} />
        </Routes>
      </div>
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;
