import React, { Component } from 'react';
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Container from "./components/container/container";
import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
