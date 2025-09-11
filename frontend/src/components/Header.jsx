import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function Header() {
  const location = useLocation();
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <i className="fas fa-wallet"></i>
          <h1>Finance Tracker</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/add" 
                className={location.pathname === '/add' ? 'active' : ''}
              >
                Add Transaction
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;