import "./WorkCard.css"
import PropTypes from 'prop-types';
import { FaGithub } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { FaBehance } from "react-icons/fa6";

export const WorkCard = ({
    imgSrc,
    imgAlt,
    headingText,
    descText,



}) => {
  return (
    <>
         <div className="">
            <div className="card-container">
                <div className="card-img">
                    <img className="image" src={imgSrc} alt={imgAlt}/>
                </div>
                <div className="card-content">
                    <p className="heading text-white text-sm font-bold ">{headingText}</p>
                    <p className="description text-xs font-thin text-white">{descText}</p>
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

WorkCard.propTypes = {

    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    headingText: PropTypes.string,
    descText: PropTypes.string,
    
 
   };
