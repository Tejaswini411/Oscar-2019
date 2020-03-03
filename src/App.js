import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css' ;

import Navbar from './components/navbar';
import Home from './components/home';
import ActorsContainer from './components/actorsContainer';
import Actress from './components/actress';
import Films from './components/films';


class App extends Component {
  render(){
  return (  
    <BrowserRouter>
      <div className="App">
        <Navbar title = "OSCARS 2019" /> 
        {/* <Home title= "Oscar Winners"/> */}
        {/* <Route to="/" component={Home} /> to pass simple components without any props */}

        <Route exact path="/" render={() => <Home title="OSCAR WINNERS" />} />
        <Route path="/actors" render={() => <ActorsContainer title="Best Actors" />} />
        <Route path="/actress/" render={() => <Actress title="Best Actress" />} />
        <Route path="/films" render={() => <Films title="Best Films" />} />
        

      </div>
    </BrowserRouter>
  );
}
}
export default App;
