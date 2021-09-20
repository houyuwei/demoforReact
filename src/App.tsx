import React, { Component } from 'react';
import { AppWrapper } from './style'
import Header from "./layout/Headers"
import Main from "./layout/Main"
import Footer from "./layout/Footer"
import Button from "./common/components/Button"



class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Main />
        <Footer />
      </AppWrapper >
    );
  }
}

export default App;
