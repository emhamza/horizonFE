import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Register from './components/Register'
import PrivateRoutes from './components/PrivateRoutes'
import HomePage from './components/HomePage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<NavBar />} path="/" exact>
            <Route index element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
