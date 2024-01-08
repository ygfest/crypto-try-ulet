import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
  const location = useLocation();

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  const handleHover = (e, path) => {
    if (!isCurrentPage(path)) {
      e.target.style.backgroundColor = 'rgb(1,1,1)'; // Change background color on hover
    }
  };

  const handleHoverExit = (e, path) => {
    if (!isCurrentPage(path)) {
      e.target.style.backgroundColor = 'transparent'; // Reset background color on hover exit
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(40, 42, 53)', padding: '0.5px 5px' }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav w-100 justify-content-between" style={{ margin: '0 -5' }}>
            <Link
              to="/"
              className="nav-link"
              style={{
                display: 'inline-block',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                backgroundColor: isCurrentPage('/') ? 'rgb(25, 135, 84)' : 'transparent',
                transition: 'background-color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => handleHover(e, '/')}
              onMouseLeave={(e) => handleHoverExit(e, '/')}
            >
              AFFINE | CAESAR CIPHER
            </Link>
            <Link
              to="/automono"
              className="nav-link"
              style={{
                display: 'inline-block',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                backgroundColor: isCurrentPage('/automono') ? 'rgb(25, 135, 84)' : 'transparent',
                transition: 'background-color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => handleHover(e, '/automono')}
              onMouseLeave={(e) => handleHoverExit(e, '/automono')}
            >
              AUTOKEY | MONOALPHABETIC CIPHER
            </Link>
            <Link
              to="/playhomo"
              className="nav-link"
              style={{
                display: 'inline-block',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                backgroundColor: isCurrentPage('/playhomo') ? 'rgb(25, 135, 84)' : 'transparent',
                transition: 'background-color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => handleHover(e, '/playhomo')}
              onMouseLeave={(e) => handleHoverExit(e, '/playhomo')}
            >
              PLAYFAIR | HOMOPHONIC CIPHER
            </Link>
            <Link
              to="/vigenerepoly"
              className="nav-link"
              style={{
                display: 'inline-block',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                backgroundColor: isCurrentPage('/vigenerepoly') ? 'rgb(25, 135, 84)' : 'transparent',
                transition: 'background-color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => handleHover(e, '/vigenerepoly')}
              onMouseLeave={(e) => handleHoverExit(e, '/vigenerepoly')}
            >
              VIGENERE | POLYGRAM SUBSTITUTION CIPHER
            </Link>
            <Link
              to="/hillpoly-alpha"
              className="nav-link"
              style={{
                display: 'inline-block',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                backgroundColor: isCurrentPage('/hillpoly-alpha') ? 'rgb(25, 135, 84)' : 'transparent',
                transition: 'background-color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => handleHover(e, '/hillpoly-alpha')}
              onMouseLeave={(e) => handleHoverExit(e, '/hillpoly-alpha')}
            >
              HILL | POLYALPHABETIC CIPHER
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
