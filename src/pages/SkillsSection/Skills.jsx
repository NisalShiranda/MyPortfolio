import "./Skills.css"
import SkillsSection from "../../components/Skillssection.jsx";

function Skills() {
  return (
    <>
        <div className="skills pt-16 px-[50px] " id="skills">
            <p className="text-center text-[2rem] font-bold">MY SKILLS</p>
            <p className=" text-center font-light ">Discover my expertise in a variety of key areas.<br></br>From technical proficiency to creative talents, explore the skills that empower me to create, innovate, and excel in my chosen fields.</p>
            <SkillsSection />
           
        </div>

        

    </>
  )
}

export default Skills