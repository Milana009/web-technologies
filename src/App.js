import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Menu} from './Components/Menu';
import Content from './Components/Content';


class App extends Component {
  render() {
    return (
      <div className="container">
       
       <div id="header" className="row">header</div>
       <div id="content-wrapper" className="row">
       <div id="side-menu" className="col-sm-3">
       <Menu />
       </div>
       <div id="content" className="col-sm-9">
       <Content />
    
       </div>
       </div>
      </div>
    );
  }
}

export default App;
