import React from 'react';
import { NavLink } from 'react-router-dom';

var mainSideBar = () => (
    <div>
        <ul className="navbar-nav bg-gray-900 sidebar toggled sidebar-dark" style={{minHeight:'92vh'}} id="accordionSidebar">
            {/* <li className="p-3 active">
                <a className="nav-link text-white" href="index.html">
                    <i className="fas fa-lg fa-plus-square"></i>
                </a>
            </li> */}
            <li className="">
                <NavLink to='/add' activeStyle={{borderLeft:'4px solid #F55350'}} className="p-3 nav-link text-white" href="index.html">
                    <i className="fas fa-lg fa-pen"></i>
                    {/* <span>Dashboard</span> */}
                </NavLink>
            </li>
            <li className="">
                <NavLink to='/market' activeStyle={{borderLeft:'4px solid #F55350'}} className="p-3 nav-link text-white" href="index.html">
                    <i className="fas fa-lg fa-shopping-cart"></i>
                    {/* <span>Dashboard</span> */}
                </NavLink>
            </li>
            <li className="active">
                <NavLink to='/cart' activeStyle={{borderLeft:'4px solid #F55350'}} className="p-3 nav-link text-white" href="index.html">
                    <i className="fas fa-lg fa-shopping-bag"></i>
                    {/* <span>Dashboard</span> */}
                </NavLink>
            </li>
            <li className="active">
                <NavLink to='/analytics' activeStyle={{borderLeft:'4px solid #F55350'}} className="p-3 nav-link text-white " href="index.html">
                    <i className="fas fa-lg fa-chart-pie"></i>
                    {/* <span>Dashboard</span> */}
                </NavLink>
            </li>
            <li className="active mt-auto">
                <NavLink to='/setting' activeStyle={{borderLeft:'4px solid #F55350'}} className="p-3 nav-link text-white " href="index.html">
                    <i className="fas fa-lg fa-cog"></i>
                    {/* <span>Dashboard</span> */}
                </NavLink>
            </li>
        </ul>
    </div>
)

export default mainSideBar;