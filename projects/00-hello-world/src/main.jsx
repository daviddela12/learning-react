import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Title} from "./Title.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Title title="Hola mundo" enlace="ejemplo"/>
      <App />
  </React.StrictMode>,
)
