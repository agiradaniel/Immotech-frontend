import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import LoadingContext from './pages/contexts/loadingContext';
import LoadingScreen from './pages/components/loadingScreen';

function App() {


  const [loading, setLoading] = useState(false)

  return (
    <>
      <LoadingContext.Provider value={{setLoading}}>
        <BrowserRouter>
          {loading ? (
            <LoadingScreen/>
          ):
           (<Routes>
              <Route path="/" element={<Home/>}/> 
            </Routes>)
          }
          
        </BrowserRouter>
      </LoadingContext.Provider>
    </>
  )
}

export default App
