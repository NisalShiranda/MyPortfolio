import "./Banner.css"
import { FaCircle } from "react-icons/fa";

function Banner() {
  return (
    <>
        <div className="banner grid grid-cols-1 py-2 md:grid md:grid-cols-6 md:py-6">
            <div className="banner-items flex flex-row justify-center items-center bg-[#F5D10D] ">
                <div className="bg-[#F5D10D] pr-2 invisible lg:visible"><FaCircle className="bg-[#F5D10D]" /></div>
                <div><p className="text-center bg-[#F5D10D] font-bold text-lg ">UI/UX</p></div>
            </div>
            <div className="banner-items flex flex-row justify-center items-center bg-[#F5D10D] ">
                <div className="bg-[#F5D10D] pr-2 invisible lg:visible"><FaCircle className="bg-[#F5D10D]" /></div>
                <div><p className="text-center bg-[#F5D10D] font-bold text-lg ">DEVELOPMENT</p></div>
            </div>
            <div className="banner-items flex flex-row justify-center items-center bg-[#F5D10D] ">
                <div className="bg-[#F5D10D] pr-2 invisible lg:visible"><FaCircle className="bg-[#F5D10D]" /></div>
                <div><p className="text-center bg-[#F5D10D] font-bold text-lg ">PROGRAMMING</p></div>
            </div>
            <div className="banner-items flex flex-row justify-center items-center bg-[#F5D10D] ">
                <div className="bg-[#F5D10D] pr-2 invisible lg:visible"><FaCircle className="bg-[#F5D10D]" /></div>
                <div><p className="text-center bg-[#F5D10D] font-bold text-lg ">SOCIAL MEDIA DESIGN</p></div>
            </div>
            <div className="banner-items flex flex-row justify-center items-center bg-[#F5D10D] ">
                <div className="bg-[#F5D10D] pr-2 invisible lg:visible "><FaCircle className="bg-[#F5D10D]" /></div>
                <div><p className="text-center bg-[#F5D10D] font-bold text-lg ">PRODUCT DESIGN</p></div>
            </div>
            <div className="banner-items flex flex-row justify-center items-center bg-[#F5D10D] ">
                <div className="bg-[#F5D10D] pr-2 invisible lg:visible"><FaCircle className="bg-[#F5D10D]" /></div>
                <div><p className="text-center bg-[#F5D10D] font-bold text-lg ">BRANDING</p></div>
            </div>
            
        </div>
    </>
  )
}

export default Banner