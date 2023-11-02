import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
