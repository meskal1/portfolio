import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.scss'
import './analytics/analytics'

import App from './app/App'

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
