import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Clickbait from './Clickbait'
import Ad from './Ad'
import Footer from './Footer'
import Body from './Body'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Body />
        <main className="expanded row">
          
          <Ad />

         <Clickbait />
        </main>

        <Footer/>
      </div>
    );
  }
}

export default App;