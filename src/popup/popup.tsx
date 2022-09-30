import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css';

const App = () => {
  return <h1>Hello from popup</h1>;
};

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);

const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));
