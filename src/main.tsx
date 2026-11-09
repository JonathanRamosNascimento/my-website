import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import PrivacyPolicy, { PRIVACY_POLICY_PATH } from './PrivacyPolicy'
import './styles.css'

const path = window.location.pathname.replace(/\/+$/, '')
const Page = path === PRIVACY_POLICY_PATH ? PrivacyPolicy : App

createRoot(document.getElementById('root')!).render(
  <StrictMode><Page /></StrictMode>,
)
