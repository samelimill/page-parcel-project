import Navbar from '../src/components/Home/Navbar';
import './App.css';
import Home from '../src/pages/HomePage';

import Contact from '../src/components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
          </Routes>
      </Router>
    </>
  );
}


export default App;

