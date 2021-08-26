import React from 'react'
import './App.sass'
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Journey from './components/journey/Journey';
import Contact from './components/contact/Contact'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
          <Switch> 
            <Route path="/" exact component={Intro}/>
            <Route path="/About" component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Journey" component={Journey} />
            <Route path="/Contact" component={Contact} />
          </Switch>

      </div>
    </Router>
  );
}



export default App;