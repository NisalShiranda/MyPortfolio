import "./Skills.css"
import SkillsSection from "../../components/Skillssection.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Skills() {
  AOS.init({duration: 1500});
  return (
    <>
        <div className="skills pt-16 px-[50px] " id="skills" data-aos="fade-right">
            <p className="text-center text-[2rem] font-bold">MY SKILLS</p>
            <p className=" text-center font-light ">Discover my expertise in a variety of key areas.<br></br>From technical proficiency to creative talents, explore the skills that empower me to create, innovate, and excel in my chosen fields.</p>
            <SkillsSection />
           
        </div>

        

    </>
  )
}

export default Skills