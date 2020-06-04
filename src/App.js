import React from 'react';
import logo from './assets/images/MainPichincha.svg';
import './assets/styles/main.css';
import ValidationComponent from './components/ValidationCodeComponent';

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
      </header>
      <section>
        <ValidationComponent />
      </section>
    </>
  );
}

export default App;
