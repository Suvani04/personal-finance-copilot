import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Upload from './pages/Upload'
import Dashboard from './pages/Dashboard'
import Budget from './pages/Budget'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/upload" element={<Upload/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/budget" element={<Budget/>}/>
    </Routes>
  )
}

export default App