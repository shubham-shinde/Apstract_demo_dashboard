import React from 'react';
import logos from '../logo.png';

const Navbar = () => (
    <header className="navbar navbar-expand-sm navbar-dark" style={{justifyContent:'space-between', background:'#171b23'}}>
    <a className="navbar-brand" style={{display:'flex', alignItems:'center'}}>
      <img className="ml-3" style={{width: '40px', height: '40px'}} src={logos} alt="logo"/>
      <h3 className="m-2 pl-2 text-white">Apstract</h3>
    </a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav" style={{alignItems:'center'}}>
        <li className="nav-item ml-2">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link" href="#">Docs & api</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link btn btn-outline-primary btn-sm m-2" href="#">Sign in</a>
        </li>
        <li className="nav-item ml-2">
          <a className="nav-link btn btn-primary btn-sm m-2" style={{color:'white'}} href="#">Sign up for free</a>
        </li>
      </ul>
    </div>
  </header>
)

export default Navbar;