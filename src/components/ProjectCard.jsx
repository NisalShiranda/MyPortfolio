import "./ProjectCard.css"
import first from "../../public/Hero Section.png"
import { FaGithub } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { FaBehance } from "react-icons/fa6";

function ProjectCard() {
  return (
    <>
        <div className="">
            <div className="card-container">
                <div className="card-img">
                    <img className="image" src={first} alt="first project" />
                </div>
                <div className="card-content">
                    <p className="heading text-white text-sm font-bold ">Nisal Shiranda Ranasinghe Sri Lanka</p>
                    <p className="description text-xs font-thin text-white">Nisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal ShirandaNisal Shiranda</p>
                    <div className="card-logos flex pt-2">
                        <div className="px-2"><FaGithub className="text-[#F5D10D] text-xl" /></div>
                        <div className="px-2"><CgFigma className="text-[#F5D10D]"  /></div>
                        <div className="px-2"><FaBehance className="text-[#F5D10D]"  /></div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectCard