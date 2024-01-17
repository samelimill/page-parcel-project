// Importing necessary components and styles
import Navbar from '../src/components/Home/Navbar';
import './App.css';
import Home from '../src/pages/HomePage';
import Contact from '../src/components/Contact/Contact';
import About from '../src/components/About/About';
import Login from './pages/Login';
import Account from './pages/AccountPage';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Creating an Apollo Client instance for GraphQL operations
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Replace with the correct GraphQL endpoint
  cache: new InMemoryCache(),
});

// Main functional component for the App
function App() {
  // Rendering the App component
  return (
    // Wrapping the entire app with ApolloProvider to enable GraphQL functionality
    <ApolloProvider client={client}>
      <>
        {/* Setting up the Router for navigation */}
        <Router>
          {/* Including the Navbar component for navigation */}
          <Navbar />
          {/* Defining routes for different pages */}
          <Routes>
            <Route path='/' exact element={<Home />} /> {/* Home page */}
            <Route path='/contact' element={<Contact />} /> {/* Contact page */}
            <Route path='/about' exact element={<About />} /> {/* About page */}
            <Route path='/login' exact element={<Login />} /> {/* Login page */}
            <Route path='/signup' exact element={<Signup />} /> {/* Signup page */}
            <Route path='/account' exact element={<Account />} /> {/* Account page */}
          </Routes>
        </Router>
      </>
    </ApolloProvider>
  );
}

// Exporting the App component as the default export
export default App;
