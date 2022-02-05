import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './TopNav';
import CarPlateInfo from './api-components/CarPlateInfo';
import CryptoValue from './api-components/CryptoValue';
import FiatExchange from './api-components/FiatExchange';
import PostCodeInfo from './api-components/PostCodeInfo';

import Container from 'react-bootstrap/Container'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <TopNav />
        <Container>
          <Routes>
            <Route path="/" element={<CarPlateInfo/> } />        
            <Route path="/post-code" element={<PostCodeInfo />} />
            <Route path="/fiat-exchange" element={<FiatExchange />} />
            <Route path="/crypto-value" element={<CryptoValue />} />  
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
