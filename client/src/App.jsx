import Navbar from '../src/components/Home/Navbar';
import './App.css';
import Home from '../src/pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Home />}></Route>
          </Routes>
      </Router>
    </>
  );
}


export default App;

