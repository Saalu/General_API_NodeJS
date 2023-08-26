import React from 'react';
import './Sidebar.css'; // Import your CSS file for styling
import { useSelector } from 'react-redux';

const Sidebar = ({ activeItem, onItemClick }) => {
  
  const name = useSelector(state => state.user.name)
  const sidebarItems = [
    { id: 1, label: 'Home', icon: '🏠' },
    { id: 2, label: 'Profile', icon: '👤' },
    { id: 3, label: 'Messages', icon: '💌' },
    { id: 4, label: 'Settings', icon: '⚙️' },
    { id: 5, label: `Logout (${name})`, icon: '🔒' },
  ];

  return (
    <div className="sidebar">
      {sidebarItems.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item ${
            activeItem === item.label ? 'active' : ''
          }`}
          onClick={() => onItemClick(item.label)}
        >
          <span className="item-icon">{item.icon}</span>
          <span className="item-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
