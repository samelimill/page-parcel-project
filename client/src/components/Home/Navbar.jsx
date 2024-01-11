import  { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoMenuSharp } from "react-icons/io5";
import Auth from '../../utils/auth';
import { AiOutlineMenuFold } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (<li className='nav-item'>
      <Link
          to='/account'
          className='nav-links'
          onClick={closeMobileMenu}
        >
          Account
        </Link>
        </li>)
    } else {
      return (<li className='nav-item'>
      <Link
          to='/login'
          className='nav-links'
          onClick={closeMobileMenu}
        >
          Log In
        </Link>
        </li>)
    }
    }
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PAGE PARCEL <SiBookstack />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {!click ?  <IoMenuSharp />: <AiOutlineMenuFold />
}
          
          </div>
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
                About us
              </Link>
            </li>
            {showNavigation()}

          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;