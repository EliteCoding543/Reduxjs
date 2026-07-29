import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import {Store} from './Utlis/Store'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <BrowserRouter>
    <App />
   </BrowserRouter>
  </Provider>
)
