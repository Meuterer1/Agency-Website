import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app'

const rootElement = document.getElementById('root')

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  )
} else {
  console.error("Element with ID 'root' not found in the document.")
}
