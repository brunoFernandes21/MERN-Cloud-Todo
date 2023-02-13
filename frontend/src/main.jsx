import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router}  from "react-router-dom";
import {ScrollToTop } from './components/ScrollToTop'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
)
