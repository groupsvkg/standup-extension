import React from 'react';
import ReactDOM from 'react-dom/client';
import './options.css'

const App = () => <img src="icon.png" />;

const rootNode =document.createElement("div");
document.body.appendChild(rootNode);

const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));
