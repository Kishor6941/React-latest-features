import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/redux-toolkit/store.js'
import UseContextHook from './hooks/UseContextHook.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <UseContextHook>
    <App />
    </UseContextHook>
    </Provider>
  </BrowserRouter>
//  </StrictMode>,
)


// props
// children