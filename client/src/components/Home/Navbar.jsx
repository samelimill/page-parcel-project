// Importing necessary dependencies and styles
import { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoMenuSharp } from "react-icons/io5";
import Auth from '../../utils/auth';
import { AiOutlineMenuFold } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";

// Functional component for the Navbar
function Navbar() {
  // State variables for click event and button visibility
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Handles the logout function for the logout link
  const handleLogout = () => {
    Auth.logout();
  };

  // Toggle click event for mobile menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Checks window width for button visibility
  const showButton = () => {
    if (window.innerWidth <= 960 || Auth.loggedIn()) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Determines the navigation links based on user authentication
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <li className='nav-item'>
            <Link
              to='/account'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Account
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={handleLogout}
            >
              Log Out
            </Link>
          </li>  
        </>)
    } else {
      return (
        <>
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Log In
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/signup'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>   
        </>
      )
    }
  }

  // useEffect to run showButton on component mount
  useEffect(() => {
    showButton();
  }, []);

  // Event listener for window resize to handle button visibility
  window.addEventListener('resize', showButton);

  return (
    <>
      {/* Navbar component */}
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* Logo and home link */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PAGE PARCEL <SiBookstack />
          </Link>
          {/* Menu icon for mobile view */}
          <div className='menu-icon' onClick={handleClick}>
            {!click ?  <IoMenuSharp />: <AiOutlineMenuFold />}
          </div>
          {/* Navigation links */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            {/* Render dynamic navigation links based on user authentication */}
            {showNavigation()}
          </ul>
        </div>
      </nav>
    </>
  );
}

// Exporting the Navbar component as the default export
export default Navbar;
