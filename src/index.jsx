import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './modules/logo/Logo';
import Container from './modules/container/Container.jsx'


import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <Logo />
    <Container />
  </>
);

