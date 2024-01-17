import Navbar from "../src/components/Home/Navbar";
import "./App.css";
import Home from "../src/pages/HomePage";
import Contact from "../src/components/Contact/Contact";
import About from "../src/components/About/About";
import Login from "./pages/Login";
import Account from "./pages/AccountPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Create a new Apollo client instance
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", // Replace with the correct GraphQL endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Router>
          <Navbar /> {/* Render the Navbar component */}
          <Routes>
            <Route path="/" exact element={<Home />}></Route> {/* Render the Home component for the root path */}
            <Route path="/contact" element={<Contact />}></Route> {/* Render the Contact component for the /contact path */}
            <Route path="/about" exact element={<About />}></Route> {/* Render the About component for the /about path */}
            <Route path="/login" exact element={<Login />}></Route> {/* Render the Login component for the /login path */}
            <Route path="/signup" exact element={<Signup />}></Route> {/* Render the Signup component for the /signup path */}
            <Route path="/account" exact element={<Account />}></Route> {/* Render the Account component for the /account path */}
          </Routes>
        </Router>
      </>
    </ApolloProvider>
  );
}

export default App;
