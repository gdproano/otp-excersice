import React from 'react';
import logo from './assets/images/MainPichincha.svg';
import './assets/styles/main.css';
import ValidationComponent from './components/ValidationCodeComponent';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
      </header>
      <section className="">
        <ValidationComponent />
      </section>
    </div>
  );
}

export default App;
