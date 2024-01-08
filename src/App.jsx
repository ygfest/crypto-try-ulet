import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import LikeComponent from './components/LikeComponent';
import NavLinks from './components/NavLinks';
import NavbarComp from './components/NavbarComp';
import { useState } from 'react';
import './components/NavbarComp.css';

function App() {
  const [count, setCount] = useState(0);

  const addOnClick = () => {
    setCount(prevState => prevState + 1);
  };

  const minusOnClick = () => {
    setCount(prevState => prevState - 1);
  };
  
  return (
    <Router>
      <NavbarComp />
      <NavLinks />
      <AppRoutes />
      
    </Router>
  );
}

export default App;
