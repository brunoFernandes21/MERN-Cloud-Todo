import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router}  from "react-router-dom";
import {ScrollToTop } from './components/ScrollToTop'

import App from './App'
import './index.css'
import { ProjectsProvider } from './context/ProjectContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectsProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </ProjectsProvider>
  </React.StrictMode>,
)
