import React, { useState } from 'react'; 
import {Link} from 'react-router-dom';
function Navbar() {

  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const toggleDarkMode = () => {
    
      document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){

      dmode.src = '/light.png';
      
    }
    else{
      dmode.src = '/dark.png';
    }
  };

   


  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#"><img src="/logo.png" alt="Logo.png" width="100px" />
        </a>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
      <li><Link to="/" onClick={closeMenu}>Home</Link></li>
      <li><Link to="/aboutme" onClick={closeMenu}>About Me</Link></li>
      <li ><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
      <li ><Link to="/project" onClick={closeMenu}>Projects</Link></li>
      <li ><Link to="/contact" onClick={closeMenu}>Contacts</Link></li>
      <li><img src="/dark.png " alt="dark.png" id="dmode"  onClick={toggleDarkMode } /></li>
      </div>


      
      
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>

    </>
  );

  
}

export default Navbar;
