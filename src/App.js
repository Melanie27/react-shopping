import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Flower from './components/Flower';
import Edible from './components/Edible';
import Extract from './components/Extract';
import Other from './components/Other';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Point of Sale </h1>
          <nav>
            <ul className='nav__list'>
              <li className="nav__item"><Link to='/'>Landing</Link></li>
              <li className="nav__item"><Link to='/flower'>Flower</Link></li>
              <li className="nav__item"><Link to='/edible'>Edible</Link></li>
              <li className="nav__item"><Link to='/extract'>Extract</Link></li>
              <li className="nav__item"><Link to='/other'>Other</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Route exact path="/" component={Landing} />
          <Route path= "/flower" component={Flower} />
          <Route path= "/edible" component={Edible} />
          <Route path= "/extract" component={Extract} />
          <Route path= "/other" component={Other} />
        </main>
        
      </div>
    );
  }
}

export default App;
