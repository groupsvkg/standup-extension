import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (<p>Hello world!!</p>);

const rootNode =document.createElement("div");
document.body.appendChild(rootNode);

const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));
