
import Navbar from '../src/components/Home/Navbar';
import './App.css';
import Home from '../src/pages/HomePage';
import Contact from '../src/components/Contact/Contact';
import Stripe from '../src/pages/StripePage';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/stripe' exact element={ <Stripe />}></Route>
        <Route path='/login' exact element={ <Login />}></Route>
        <Route path='/signup' exact element={ <Signup />}></Route>
          </Routes>
      </Router>
    </>
  );
}


export default App;