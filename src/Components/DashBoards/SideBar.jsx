import React from 'react';
import style from './sideBar.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <h2>UTSOVA</h2>
      <ul>
        <li className={style.menu}>DASHBOARD</li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accounts
          </a>
          <ul className="dropdown-menu">
          <li><Link to={"/"} className="dropdown-item">Profile</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hotels
          </a>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item">All Rooms</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item">Add new Rooms</Link></li>
          </ul>
        </li>

        <li className={style.menu}>MENU</li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rooms
          </a>
          <ul className="dropdown-menu">
            <li><Link to={"/room"} className="dropdown-item">All Rooms</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item">Add new Rooms</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><Link to={"/events"} className="dropdown-item">All Category</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item">Add new Category</Link></li>
            <li><Link className="dropdown-item">Sub Category</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Orders
          </a>
          <ul className="dropdown-menu">
            <li><Link to={"/shop"} className="dropdown-item">All Orders</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item">Add new Orders</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="dropdown-item">Payments</Link>
        </li>
      </ul>

        <h5 style={{ marginTop: "40px",position:'absolute',bottom:'12px',left:'50px' }}>

          <LogoutIcon/>
          Log Out</h5>
    </div>
  );
};

export default Sidebar;