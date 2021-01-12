import React from 'react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useAuth } from './model/context/auth_context'
import { HomePage } from './components/pages/HomePage';
const DeveloperApp = React.lazy(() => import('./components/pages/DeveloperApp'))
const AuthenticatedApp = React.lazy(() => import('./components/pages/AuthenticatedApp'))
const AuthenticatedManagerApp = React.lazy(() => import('./components/pages/AuthenticatedApp'))
const UnauthenticatedApp = React.lazy(() => import('./components/pages/UnAuthenticatedApp'))

function App() {

  const {user} = useAuth()
  return (
    <React.Suspense fallback={<HomePage />}>
      {/* {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} */}
      <DeveloperApp/>
    </React.Suspense>
  )
}

export default App;