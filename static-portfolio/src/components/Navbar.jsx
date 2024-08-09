import { Flex, Text, Button } from "@radix-ui/themes";
import React, { useState } from "react";
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-scroll';
import { AnimatePresence, backInOut, motion, spring } from "framer-motion"



const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "about" },
  { title: "Portfolio",href: "portfolio" },
  { title: "News", href: "news" },
  { title: "Contact",href: "contact" },
];

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
      // Reset Hero section background color here if needed
      // Example:
      document.querySelector('.Hero-section').style.backgroundColor = 'initial';
    }
  };
  
  window.addEventListener("scroll", changeNavbarColor);

  // Toggle menu visibility
  const toggleMenu = () => {
    console.log("Toggle menu clicked");
    setShowMenu(!showMenu);
  };

  const menuVars = {
    initial: {
      x: -650, // Move menu up by 100px
    },
    animate: {
      opacity: 1,
       x: 0,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
   
        
      },
    },
    exit: {
     y: -1100, // Move menu up by 100px
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],

      },
    },
  };

  const ListVars = {
    initial: {
       opacity: 0,      x: 100,
      transition: {
       duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7,
     type: spring, 
    
      },
    },
  };

  return (
    <>
      <div className={colorChange ? "header header-bg" : "header"} >
        <nav className={showMenu ? "navbar navbar-open" : "navbar"}  >
          <div className="morningstar" style={{ width: "95px", }}>
           <img src="logo.png" alt="logo" style={{ width: "100%", }}  />

          </div>


          <ul className="navMenu">
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{ textDecoration: "none", }}
              >Home</Link>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{ textDecoration: "none", }}
              >About</Link>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{ textDecoration: "none", }}
              >Portfolio</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Link
                activeClass="active"
                to="news"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{ textDecoration: "none", }}
              >News</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{ textDecoration: "none", }}
              >Contact</Link>
            </motion.li>

            <Button className="buynowbtn" my="-2">
              <Text size="4"> HIRE ME</Text>
            </Button>
          </ul>

          {/* MobileMenu navbar */}
          <AnimatePresence>
            {showMenu ? (
              <>
              <motion.div
                  variants={menuVars}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="mobile-menu"
              >
                <motion.ul  
                       variants={ListVars}
                       animate = "open"
                       initial="initial"
                       exit="initial"
                 >
                     { navLinks.map((Link, index ) => {
                       return(
                        <motion.li key={index} 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        ><a to={Link.href}>{Link.title}</a></motion.li>
                       )
                     })}
                   

                    <Button className="buynowbtn" my="-2">
                      <Text size="4"> HIRE ME</Text>
                    </Button>
                </motion.ul>
                </motion.div>
              </>
            ) : ""}
          </AnimatePresence>
          <HamburgerMenu
            isOpen={showMenu}
            menuClicked={toggleMenu}
            width={30}
            height={20}
            strokeWidth={3}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
            className="menu-toggle"
          />
        </nav>
      </div>
    </>
  );
}

export default Navbar;



