import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import global_en from "./translation/en/global.json"
import global_mk from "./translation/mk/global.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: {escapeValue: true},
  lng: "mk",
  resources:{
    en:{
      global: global_en
    },
    mk:{
      global:global_mk
    },
  },
}
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>,
)
