import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar flex flex-col justify-center items-center sm:flex sm:flex-row sm:justify-between">
        <div className="navbar-logo font-extrabold">
          NS.
        </div>
        <div className="navbar-item flex flex-col justify-center items-center font-bold sm:flex sm:flex-row sm:justify-between ">
          <a className="sm:pr-[50px]"href="#home">Home</a>
          <a className="sm:pr-[50px]"href="#about">Skills</a>
          <a className="sm:pr-[50px]"href="#services">Works</a>
          <a href="#contact">Contact</a>
        </div>
    </div>
  )
}

export default Navbar