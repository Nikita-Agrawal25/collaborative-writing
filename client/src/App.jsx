import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import GoogleLogin from './pages/GoogleLogin'
import Dashboard from './pages/Dashboard'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Editor from './Editor'

function App() {

  const GoogleWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="1048868458909-2eujgvp2nj491nocou15koptj177a1dl.apps.googleusercontent.com">
			  <GoogleLogin></GoogleLogin>
		  </GoogleOAuthProvider>
    )
  }
  const SignupWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="1048868458909-2eujgvp2nj491nocou15koptj177a1dl.apps.googleusercontent.com">
			  <Signup></Signup>
		  </GoogleOAuthProvider>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<GoogleWrapper/>}/>
          {/* <Route path='/' element={<Navigate to='/login'/>}/> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignupWrapper/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/editor/:id" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App