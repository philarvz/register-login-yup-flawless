import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormRegistro from './modules/formRegistro/screens/FormRegistro';
import Login from './modules/login/screens/Login';
import Data from './modules/showData/screens/Data';
import Error from './modules/error/screens/Error';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FormRegistro/>}/>
          <Route path='/login/' element={<Login/>}/>
          <Route path='/data/' element={<Data/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
