import React from 'react'
// import ReactDOM from 'react-dom' --deprecated
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)