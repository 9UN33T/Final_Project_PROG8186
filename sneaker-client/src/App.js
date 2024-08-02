import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SneakerList from './components/SneakerList';
import SneakerDetail from './components/SneakerDetail';
import CartManager from './components/CartManager';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<SneakerList />} />
          <Route path="/sneaker/:id" element={<SneakerDetail />} />
          <Route path="/cart" element={<CartManager />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
