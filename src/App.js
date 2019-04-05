import React, { Component } from 'react';
import NavBar from './components/dashboard/NavBar';
import Create from './components/dashboard/create';
import Market from './components/dashboard/market';
import Cart from './components/dashboard/edit';
import Setting from './components/dashboard/play'
import Analytics from './components/dashboard/analytics';
import MainSideBar from './components/dashboard/MainSideBar';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/dash.css'
import './css/bootstrap.css';
import './css/App.css';
import './vendor/fontawesome-free/css/all.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <div  style={{display:'flex'}}>
            <MainSideBar/>
            <Route exact path='/add' component={Create}/>
            <Route path='/market' component={Market}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/setting' component={Setting}/>
            <Route path='/analytics' component={Analytics}/>
          </div>
          {/* <HomePage/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
