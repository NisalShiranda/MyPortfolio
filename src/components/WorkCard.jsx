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
    hoverText,
    linkg,
    linkf,
    linkb,



}) => {
  return (
    <>
         <div className="">
            <div className="card-container">
                <div className="card-img">
                    <img className="image" src={imgSrc} alt={imgAlt}/>
                    <div className="content">
                        <p className="hover bg-transparent hidden  font-light text-center lg:block text-white">{hoverText}</p>
                    </div>
                </div>
                <div className="card-content">
                    <p className="heading  text-sm font-bold ">{headingText}</p>
                    <p className="description text-xs font-md text-[#F5D10D] ">{descText}</p>
                    <div className="card-logos flex pt-2">
                        <div className="px-2"><a href={linkg}><FaGithub className="text-[#F5D10D] text-xl" /></a></div>
                        <div className="px-2"><a href={linkf}><CgFigma className="text-[#F5D10D]"   /></a></div>
                        <div className="px-2"><a href={linkb}><FaBehance className="text-[#F5D10D]" href={linkg} /></a></div>

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
    hoverText: PropTypes.string,
    linkg: PropTypes.string,
    linkf: PropTypes.string,
    linkb: PropTypes.string,
    
 
   };

