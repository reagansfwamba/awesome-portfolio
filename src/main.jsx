import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import your main App component
// Adjust the path if your App component is in a different directory

// If you have a global CSS file, import it here
// This is typically where you would import your main CSS file
// For example, if you have an index.css or App.css
// import './App.css'; // Uncomment if you have a specific CSS file for your app
// If you are using Tailwind CSS, ensure you have the necessary setup in your project
import './tailwind.css' // Import your Tailwind CSS file if you have one
// This is where you would import your Tailwind CSS file if you have one
// Ensure that your Tailwind CSS is configured correctly in your project
// If you are using a global CSS file, you can import it here
// For example, if you have a global index.css or App.css, you can import it
// import './index.css'; // Uncomment if you have a global CSS file
// This is typically where you would import your main CSS file
// For example, if you have an index.css or App.css
// import './App.css'; // Uncomment if you have a specific CSS file for your app  


import './index.css' // Keep this if you have a global index.css from Vite's template

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)