import "./Hero.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import HeroImage from "../../../public/hero.png"
import {HashLink as Link} from 'react-router-hash-link';



function Hero() {
    
  return (
    <div className="hero md:flex md:flex-row xl:mb-16 " id="home">
        <div className="box1 flex flex-col justify-center items-center md:items-center md:justify-center md:w-[20%] lg:pt-16 " >
            <div className="nisal bg-transparent"><p className="font-bold text-[2rem] text-center bg-transparent md:text-center md:text-[3rem]">NISAL SHIRANDA<span className="text-[#F5D10D]">.</span></p>
            </div>
            <div className="box1-line transparent"></div>
            <div className="box1-icons pt-5 flex flex-row justify-center">
                <a href="https://web.facebook.com/nisal.shiranda/" className="facebook bg-transparent "><FaFacebook className="icon fb " /></a>
                <a href="https://www.instagram.com/_nixzaa_/?hl=en" className="instargram pl-2"><RiInstagramFill className="icon" /></a>
                <a href="https://github.com/NisalShiranda" className="instargram pl-2"><FaGithub className="icon" /></a>
                <a href="https://www.behance.net/nisalshiranda" className="instargram pl-2"><FaBehanceSquare className="icon" /></a>
                <a href="https://www.linkedin.com/in/nshiranda/" className="instargram pl-2"><FaLinkedinIn className="icon" /></a>
            </div>

            <div className="pt-5 bg-transparent">
                {/* <Link className="" to="#contact" smooth>CONTACT</Link> */}
                {/* <p className="button">CONTACT ME</p> */}
            </div>
            <div className="pt-5">
                <a href="https://drive.google.com/file/d/1-qNdJI0G_cY1sxNFC0rF1Omz4WwF7HS6/view?usp=sharing" target="_blank"><p className="button">DOWNLOAD CV</p></a>
            </div>
            
        </div>
        <div className="box2 md:w-[60%] bg-transparent">
            <div className="box2-image pt-4 flex justify-center items-center ">
            <img className="myImage md:w-[60%]"src={HeroImage} alt="hero-Image"></img>

            </div>
        </div>

        <div className="box3 pt-5 flex flex-col justify-center items-center md:items-center md:justify-center md:w-[20%]" >
        
                <p className="text-[#F5D10D]">INTRODUCTION</p>
                <p className="text-[1.5rem] text-center md:text-end">UI/UX Engineer,</p>
                <p className="text-[1.5rem] text-center md:text-end">Frontend Developer,</p>
                <p className="text-[1.5rem] text-center md:text-end">Fullstack Developer,</p>
                <div className="aboutme">
                <p className="pt-5 text-center md:text- md:hidden xl:block">Hi, I am Nisal Shiranda, a passionate and dedicated UI/UX Engineer, Frontend Developer, and Full Stack Developer based in Negombo. With expertise in Figma, HTML, CSS, Tailwind CSS, React.js, Node.js, MongoDB, and Express.js. <div className="hidden ">I bring a blend of creativity and technical skill to every project I undertake. My journey in tech has been fueled by a love for creating intuitive and engaging user experiences. I have a knack for transforming complex problems into elegant, user-friendly designs and seamless web applications.</div></p>
                </div>
                
                
            
        </div>

        {/* <div className="absolute z-[-2] bg-[#fdd421] w-[200px] h-[200px] blur-[100px] top-[50px] left-[250px]"></div> */}
        
        

    </div>
  )
}

export default Hero