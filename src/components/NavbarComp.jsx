import React from 'react';
import logo from '../assets/sec3-logo.svg'; // Adjust the path relative to the file location
import './NavbarComp.css'; // Create a separate CSS file for styling

const NavbarComp = () => {
  return (
    <nav className="navbar bg-body-tertiary" style={{ height: '80px' }}>
      <div className="container-fluid">
        <a className="navbar-brand brand-text" href="/">
          <img src={logo} alt="Logo" height="100%" className="d-inline-block align-text-center" style={{ marginRight: '30px', marginLeft: '10px'}} />
          AIAS | Cryptography
        </a>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-success me-md-2" type="button">Sign up</button>
          <button className="btn btn-outline-success" type="button">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
