import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className="footer grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-transparent flex justify-center items-center">
            <p className="text-center bg-transparent text-black text-[6rem] font-extrabold">NS.</p>
        </div>
        <div className="bg-transparent">
            <div className="grid grid-cols-1 gap-4 bg-transparent justify-center items-center ">
                <div className="bg-transparent flex justify-center items-center link ">
                   
                        <div className="bg-transparent"><FaFacebook className="text-xl bg-transparent " /></div>
                        <div className="bg-transparent"><a className="text-sm pl-2 font-normal bg-transparent "href="https://web.facebook.com/nisal.shiranda/">https://web.facebook.com/nisal.shiranda/</a></div>
                    
                </div>
                <div className="bg-transparent flex justify-center items-center link ">
                   
                        <div className="bg-transparent"><FaLinkedin className="text-xl bg-transparent " /></div>
                        <div className="bg-transparent"><a className="text-sm pl-2 font-normal bg-transparent "href="https://www.linkedin.com/in/nshiranda/">https://www.linkedin.com/in/nshiranda/</a></div>
                    
                </div>

                <div className="bg-transparent flex justify-center items-center link ">
                   
                        <div className="bg-transparent"><RiInstagramFill className="text-xl bg-transparent " /></div>
                        <div className="bg-transparent"><a className="text-sm pl-2 font-normal bg-transparent "href="https://www.instagram.com/_nixzaa_/?hl=en">https://www.instagram.com/_nixzaa_/?hl=en</a></div>
                    
                </div>

                <div className="bg-transparent flex justify-center items-center link ">
                   
                        <div className="bg-transparent"><FaGithub  className="text-xl bg-transparent " /></div>
                        <div className="bg-transparent"><a className="text-sm pl-2 font-normal bg-transparent "href="https://github.com/NisalShiranda">https://github.com/NisalShiranda</a></div>
                    
                </div>

                <div className="bg-transparent flex justify-center items-center link ">
                   
                        <div className="bg-transparent"><FaBehanceSquare  className="text-xl bg-transparent " /></div>
                        <div className="bg-transparent"><a className="text-sm pl-2 font-normal bg-transparent "href="https://www.behance.net/nisalshiranda">https://www.behance.net/nisalshiranda</a></div>
                    
                </div>
                
                
            </div>
        </div>
            
        </div>
    </>
  )
}

export default Footer