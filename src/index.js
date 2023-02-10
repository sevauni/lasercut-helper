import React from 'react';
//import ReactDOM from 'react-dom/client';
//import 'normalize.css';
import './index.css';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

