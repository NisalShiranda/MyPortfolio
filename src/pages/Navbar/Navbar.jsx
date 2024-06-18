import { BrowserRouter } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link';


import "./Navbar.css"

function Navbar() {
  return (
    <BrowserRouter>
      <div className="navbar flex flex-col justify-center items-center sm:flex sm:flex-row sm:justify-between">
          <div className="navbar-logo font-extrabold bg-transparent">
            NS.
          </div>
          <div className="navbar-item flex flex-col justify-center items-center font-bold sm:flex sm:flex-row sm:justify-between ">
            
            <Link className="sm:pr-[50px] item" to="#home" smooth>Home</Link>
            <Link className="sm:pr-[50px] item" to="#skills" smooth>Skills</Link>
            <Link className="sm:pr-[50px] item" to="#works" smooth>Works</Link>
            <Link className="sm:pr-[50px] item" to="#contact" smooth>Contact</Link>
            
          </div>
      </div>
    </BrowserRouter>
  )
}

export default Navbar