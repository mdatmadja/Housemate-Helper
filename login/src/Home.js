import React, { useRef, useEffect } from 'react';
import { Routes } from 'react-router';
import { BrowserRouter, NavLink, Route, useLocation, Switch } from 'react-router-dom';
import firebase from 'firebase';
import fire from './fire';
import Expenses from "./Expenses";
import Join from "./Join";
import Chores from "./Chores";
import Login from './Login.js'
import HomePage from './Homepage.js'
import apiService from './apiService';
import App from './App';
import CreateGroup from './CreateGroup.js';
import Image from 'react-bootstrap/Image'
export * from "react-router";

//import './Home.css';

function Home() {

  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle('menu-collapse');
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains('menu-collapse')) {
      navbarLinks.current.classList.add('menu-collapse');
    }
  }

  return (
    <div className="Home">
      <BrowserRouter>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='navbar-container'>
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div ref={navbarLinks} className='navbar-links menu-collapse'>
                <div class="navbar-nav">
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/joingroup'>Join/Leave a group</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/create'>Create a group</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/chores'>Chores</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/expenses'>Expenses</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/logout'>Logout</NavLink>
                </li>
                {/* <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/contact'>Calendar</NavLink>
                </li> */}
            </div>
            </div>
          </div>
        </nav>
        <div className='container'>
          <AllRoutes hideMenu={() => { hideNavMenu(); }}></AllRoutes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function AllRoutes({ hideMenu }) {

  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <Switch>
        <Route path="/logout" component={Logout}>
      </Route>
      <Route path="/create" component={Create}>
      </Route>
      <Route path="/joingroup" component={JoinGroup}>
      </Route>
      <Route path="/chores" component={ChoresPage}>
      </Route>
      <Route path="/expenses" component={ExpensesPage}>
      </Route>
      <Route path="/" component={Home1}>
      </Route>
      
    </Switch>
  );
}

function Logout()
{
    fire.auth().signOut();
    return(<App/>);
}

function Create() {
  return (
    <CreateGroup/>
);
}

function JoinGroup() {
  return (
    <Join/>
);
}

function Home1() {
  return (
    <HomePage/>
  );
}

function ExpensesPage() {
    return (
        <Expenses/>
    );
  }
function ChoresPage() {
  return (
    <Chores/>
  );
}
export default Home;