import Navbar from '../src/components/Home/Navbar';
import './App.css';
import Home from '../src/pages/HomePage';
import Contact from '../src/components/Contact/Contact';
import About from '../src/components/About/About';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});




function App() {
 
  return (
    <ApolloProvider client={client}>
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' exact element={ <About />}></Route>
        <Route path='/login' exact element={ <Login />}></Route>
        <Route path='/signup' exact element={ <Signup />}></Route>
          </Routes>
      </Router>
    </>
    </ApolloProvider>
  );
}


export default App;