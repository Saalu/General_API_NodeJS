import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { useSelector } from 'react-redux';

const Navbar = () => {
const name = useSelector(state => state.user.userInfo.name)

  return (
    <nav className="navbar">
      <div className="logo">My App</div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="user-section">
        <button className="login-button">Login</button>
        <div className="avatar">
          <img
            src="../../assets/user-jpg"
            alt="Avatar"
            className="avatar-image"
          />
        </div>
          <span>{name}</span>
      </div>
    </nav>
  );
};

export default Navbar;
