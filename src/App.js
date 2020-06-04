import React from 'react';
import logo from './assets/images/MainPichincha.svg';
import './assets/styles/main.css';
import ValidationComponent from './components/ValidationCodeComponent';

const EMAIL = 'exxxxxiz@gmail.com'
const PHONE = '09xxxxx651'

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
      </header>
      <section>
        <ValidationComponent email={EMAIL} phone={PHONE} />
      </section>
    </>
  );
}

export default App;
