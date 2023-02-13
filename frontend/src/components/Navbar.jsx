import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md"
import { AiFillFolder, AiFillProject } from "react-icons/ai"
import { IoIosCreate } from "react-icons/io"
import { useEffect, useState } from "react";

const Navbar = () => {

  const [ color, setColor] = useState(false)
  const [ showMobile, setShowMobile ] = useState(false)
  const [ isMobile, setIsMobile ] = useState(false)

  // useEffect(() => {
  //   const updateColor = () => {
  //     if(window.scrollY > 0){
  //       setColor(true);
  //       console.log(showMobile)
  //     }else {
  //       setColor(false);
  //       console.log(showMobile)
  //     }
  //   }
  //   window.addEventListener('scroll', updateColor)
  //   updateColor()
  //   return () => window.removeEventListener('scroll', updateColor)
  // }, [])

  const mobileVisible = () => {
    if(window.innerWidth < 858) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", mobileVisible)
    return () => window.removeEventListener("resize", mobileVisible)
  }, [])

  // console.log('Mobile is: ', isMobile)
  const toggleMobileNav = () => {
    //toggle nav mobile true or false 
    setShowMobile(!showMobile)
    // console.log('showing nav')
    //sen showmobile prop to mobileNav component
  }

  return (
    <nav className={` navbar ${color ? 'nav__active' : showMobile ? "show__nav" : "" }`}>
      {/* <div className="bars">
        <FaBars className="nav__icon"/>
      </div> */}
      <Link to="/" className="title">CloudTodo</Link>
      <div className="links">
        <NavLink onClick={toggleMobileNav} className="link" to="/">
          <MdDashboard className="link__icon"/> 
          <span>Dashboard</span>
        </NavLink>
        <NavLink onClick={toggleMobileNav} className="link" to="/team">
          <AiFillFolder className="link__icon"/> 
          <span>Team</span>
        </NavLink>
        <NavLink onClick={toggleMobileNav} className="link" to="/projects">
          <AiFillProject className="link__icon"/> 
          <span>Projects</span>
        </NavLink>
        <NavLink onClick={toggleMobileNav} className="link" to="/create">
          <IoIosCreate className="link__icon"/> 
          <span>New Project</span>
        </NavLink>
      </div>         
      <div onClick={toggleMobileNav} className="mobile__icon">
        <FaBars className="nav__icon"/>
      </div>
    </nav>
  )
}

export default Navbar