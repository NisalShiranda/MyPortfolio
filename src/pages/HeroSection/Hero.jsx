import "./Hero.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import HeroImage from "../../../public/hero.png"



function Hero() {
  return (
    <div className="hero md:flex md:flex-row">
        <div className="box1 flex flex-col justify-center items-center md:items-start md:justify-start md:w-[20%] lg:pt-16">
            <div className="nisal"><p className="font-bold text-[2rem] text-center md:text-start md:text-[3rem]">NISAL SHIRANDA<span className="text-[#F5D10D]">.</span></p>
            </div>
            <div className="box1-line"></div>
            <div className="box1-icons pt-5 flex flex-row justify-center ">
                <a href="#" className="facebook"><FaFacebook className="icon fb " /></a>
                <a href="#" className="instargram pl-2"><RiInstagramFill className="icon" /></a>
                <a href="#" className="instargram pl-2"><FaGithub className="icon" /></a>
                <a href="#" className="instargram pl-2"><FaBehanceSquare className="icon" /></a>
                <a href="#" className="instargram pl-2"><FaLinkedinIn className="icon" /></a>
            </div>

            <div className="pt-5">
                <p className="button">CONTACT ME</p>
            </div>
            <div className="pt-5">
                <p className="button">DOWNLOAD CV</p>
            </div>
            
        </div>
        <div className="box2 md:w-[60%]">
            <div className="box2-image pt-4 flex justify-center items-center ">
            <img className="myImage md:w-[80%]"src={HeroImage} alt="hero-Image"></img>

            </div>
        </div>

        <div className="box3 pt-5 flex flex-col justify-center items-center md:items-end md:justify-start md:w-[20%]">
        
                <p className="text-[#F5D10D]">INTRODUCTION</p>
                <p className="text-[1.5rem] text-center md:text-end">UI/UX Engineer,</p>
                <p className="text-[1.5rem] text-center md:text-end">Frontend Developer,</p>
                <p className="text-[1.5rem] text-center md:text-end">Fullstack Developer,</p>
                <div className="aboutme">
                <p className="pt-5 text-justify md:text-end md:hidden xl:block">Hi, I am Nisal Shiranda, a passionate and dedicated UI/UX Engineer, Frontend Developer, and Full Stack Developer based in Negombo. With expertise in Figma, HTML, CSS, Tailwind CSS, React.js, Node.js, MongoDB, and Express.js. <div className="hidden xl:block">I bring a blend of creativity and technical skill to every project I undertake. My journey in tech has been fueled by a love for creating intuitive and engaging user experiences. I have a knack for transforming complex problems into elegant, user-friendly designs and seamless web applications.</div></p>
                </div>
                
                
            
        </div>
        

    </div>
  )
}

export default Hero