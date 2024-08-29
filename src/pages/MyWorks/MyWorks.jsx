import "./MyWorks.css"
import { useState } from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Tab from 'react-bootstrap/Tab';
// import Row from 'react-bootstrap/Row';

import {WorkCard} from '../../components/WorkCard'



import U1 from "../../../public/Hero Section.png"
// import P2 from "../../../public/images.jpeg"
import W1 from "../../../public/w1.png"
import W2 from "../../../public/W2.png"
import W3 from "../../../public/W3.png"
import W4 from "../../../public/W4.png"
import W5 from "../../../public/W5.png"
import W6 from "../../../public/W6.png"
import U2 from "../../../public/U2.png"
import U3 from "../../../public/U3.png"
import U4 from "../../../public/U4.png"
import U5 from "../../../public/U5.png"
import W7 from "../../../public/w7.png"
import W8 from "../../../public/w8.png"
import U6 from "../../../public/u6.png"
import G1 from "../../../public/G1.png"
import G2 from "../../../public/g2.jpg"
import G3 from "../../../public/g3.jpg"
import G4 from "../../../public/g4.jpg"
import G5 from "../../../public/g5.jpg"
import G6 from "../../../public/g6.png"
import AOS from 'aos';

// import 'aos/dist/aos.css';





function MyWorks(   ) {

  const [toggle,setToggle] = useState(1);

  function updateToggle(id){
    setToggle(id)
  }
  AOS.init({duration: 1500});
  
 
  return (
    <>
    <section id="works"  data-aos="fade-left">
      <div className="myworks ">
        <div className="myworks-title pt-5 px-[50px]">
          <p className="text-[2rem] text-center font-bold">
            MY WORKS
          </p>
          <p className=" text-center font-light">
            Here are some of the projects I have worked on. Click on the project
            to view more details.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-5 md:flex md:flex-row">
        <button
          className="works-btn btn-1 px-5 py-2 mx-5 focus:outline-ring-2 "
          onClick={() => updateToggle(1)}
        >
          All
        </button>
        <button
          className="works-btn px-5 py-2 mx-5"
          onClick={() => updateToggle(2)}
        >
          web
        </button>
        <button
          className="works-btn px-5 py-2 mx-5"
          onClick={() => updateToggle(3)}
        >
          UI/UX
        </button>
        <button
          className="works-btn px-5 py-2 mx-5"
          onClick={() => updateToggle(4)}
        >
          Graphics
        </button>
        
      </div>

      <div className={toggle === 1 ? "toggle" : "notfound"} >
        <div className="toggle pt-5">
          <div className="grid grid-cols-1 py-4 gap-8 px-[50px] lg:px-[200px] sm:grid sm:grid-cols-2 md:grid-cols-3">
          
          <div>
              <WorkCard
                imgSrc={W1}
                imgAlt="Box Stock"
                headingText="Box Stock"
                descText="Inventory Management System"
                hoverText="This inventory management system developed using Next.js, Tailwind CSS, and MongoDB. It is a full-stack web application that allows users to manage their inventory."
                linkg={"https://github.com/NisalShiranda/BoxStock_Inventory-Management-System"}
                linkf={"https://www.figma.com/design/W0WeQXm93i1ELVMEqtHRGC/BoxStock?node-id=0-1&t=NyJPu6uJWRJGk186-1"}
                linkb={"https://www.behance.net/gallery/200250909/BoxStock-Inventory-Management-System-Website-UI"}
              />
            </div>
          <div>
              <WorkCard
                imgSrc={U4}
                imgAlt="Kandos"
                headingText="Kandos Landing Page"
                descText="Chocolate Factory landing page"
                hoverText="Redesign kandos chocolate factory landing page using Neo Brutalism style."
                // linkg={"https://github.com/NisalShiranda/BoxStock_Inventory-Management-System"}
                linkf={"https://www.figma.com/design/E2a9iTuPeWaP91CkeiD3yc/Kandos?node-id=0-1&t=eE0cnv2iezjYn6fB-1"}
                linkb={"https://www.behance.net/gallery/200529501/Neo-Brutalism-Web-UIUX-Design"}
              />
              
            </div>
            <div>
              <WorkCard
                imgSrc={W7}
                imgAlt="inc"
                headingText="inc"
                descText="Agency Website"
                hoverText="Inc is an agency website developed using reactjs and tailwind css. "
                linkg={"https://github.com/NisalShiranda/inc"}
                // linkf={"https://www.figma.com/design/fUuxFfdyZaxRovV3gdS8iW/MyPortfolio?node-id=0-1&t=ZHRhh5VCnQNPkMYV-1"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W8}
                imgAlt="pumpit"
                headingText="Pumpit"
                descText="Clone the pumpit official landing page"
                hoverText="I cloned pumpit official landing page using reactjs and tailwind css. This web page style called glassmorphism"
                linkg={"https://github.com/NisalShiranda/pumpit"}
                // linkf={"https://www.figma.com/design/fUuxFfdyZaxRovV3gdS8iW/MyPortfolio?node-id=0-1&t=ZHRhh5VCnQNPkMYV-1"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={U6}
                imgAlt="Unigig"
                headingText="UNIGIGS"
                descText="Job finding applications for undergraduates"
                hoverText="Created colourful UI design for job finding application called UNIGIGS"
                // linkg={}
                linkf={"https://www.figma.com/proto/HbQ5YGzyBvieEgyRkxwJo3/UniGigs?t=AaUWePTqvk9DbGyV-1"}
                linkb={"https://www.behance.net/gallery/203550137/UNIGIGS"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={U1}
                imgAlt="Pup Love"
                headingText="Pup Love"
                descText="Website Landing Page"
                hoverText= "PupLove is a heartfelt project aimed at connecting shelter animals with their forever homes."
                // linkg={"https://github.com/NisalShiranda/BoxStock_Inventory-Management-System"}
                linkf={"https://www.figma.com/proto/SsinN2tqKGQf5kd8U0XkS6/PupLove?node-id=0-1&t=JhCzjPrnHOxj2kXG-1"}
                linkb={"https://www.behance.net/gallery/199996257/PupLove-Website-%28Homes-for-shelter-animals%29"}
              />
              
            </div>
            <div>
              <WorkCard
                imgSrc={W2}
                imgAlt="Studio"
                headingText="Studio"
                descText="Furniture Landing Page"
                hoverText="“Introducing our stunning Furniture Landing Page, crafted with React.js and Tailwind CSS. This sleek and modern webpage is designed to captivate your audience with its clean aesthetics and smooth functionality."
                linkg={"https://github.com/NisalShiranda/studio_furnitureLandingPage"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={U2}
                imgAlt="WeGuide"
                headingText="WeGuide"
                descText="Travel website Landing Page"
                hoverText="WeGuide” is a travel guide web application with intuitive navigation, attractive visuals, and seamless interaction."
                linkg={"https://github.com/NisalShiranda/WeGuide-Travel-Website"}
                linkf={"https://www.figma.com/design/u4d5yMZDHFps1VWcHXGasi/Travel-Guide-Finding-System?node-id=1-6&t=7uYF9US6TinnmK2e-1"}
                linkb={"https://www.behance.net/gallery/200398839/Travel-Website-UIUX-Design-WeGuide"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={U5}
                imgAlt="PizzaHut"
                headingText="PizzaHut"
                descText="App UI Redesign"
                hoverText="Redesigned the Pizza Hut mobile application, focusing on a modern and visually appealing interface with an enhanced user experience."
                linkf={"https://www.figma.com/proto/PWNJNdFswLaCCk0LfqCvgh/Pizza-App?page-id=0%3A1&node-id=1-2&viewport=609%2C78%2C0.14&t=ZXirPbpP4oQ9c29U-1&scaling=scale-down&starting-point-node-id=1%3A2"}
                linkb={"https://www.behance.net/gallery/200239951/PizzaHut-Mobile-Application-Redesign"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W3}
                imgAlt="Wizardz"
                headingText="Wizardz"
                descText="Agency Landing Page"
                hoverText="Introducing Wizardz, a fully responsive agency website created with React.js and Tailwind CSS."
                linkg={"https://github.com/NisalShiranda/wizardz"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={U3}
                imgAlt="Dashboard"
                headingText="BoxStock - Dashboard"
                descText="Dashboard Design"
                hoverText="Designed an intuitive, data-driven dashboard for BoxStock's inventory management system, providing users with clear and actionable insights."
                linkg={"https://github.com/NisalShiranda/BoxStock_Inventory-Management-System"}
                linkf={"https://www.figma.com/design/Tfi8OgmgKR0DZVM8nwBabM/e-commerce-dashboard-(Project)?node-id=0-1&t=y7V8J0o5HImGRs4E-1"}
                linkb={"https://www.behance.net/gallery/200393285/Dashboard-UIIX-Inventory-Management-System"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W5}
                imgAlt="WeGuide"
                headingText="WeGuide"
                descText="Travel Website"
                hoverText="Travel Website using reactjs and fully responsive"
                linkg={"https://github.com/NisalShiranda/WeGuide-Travel-Website"}
                linkf={"https://www.figma.com/design/u4d5yMZDHFps1VWcHXGasi/Travel-Guide-Finding-System?node-id=1-6&t=7uYF9US6TinnmK2e-1"}
                linkb={"https://www.behance.net/gallery/200398839/Travel-Website-UIUX-Design-WeGuide"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W6}
                imgAlt="Portfolio"
                headingText="My Portfolio"
                descText="My portfolio landing page"
                hoverText="Created My portfolio with my own style and It`s all about same color theme."
                linkg={"https://github.com/NisalShiranda/MyPortfolio"}
                linkf={"https://www.figma.com/design/fUuxFfdyZaxRovV3gdS8iW/MyPortfolio?node-id=0-1&t=ZHRhh5VCnQNPkMYV-1"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={toggle === 2 ? "toggle" : "notfound"}>
      <div className="toggle pt-5">
          <div className="grid grid-cols-1 py-4 gap-8 px-[50px] lg:px-[200px] sm:grid sm:grid-cols-2 md:grid-cols-3">
            <div>
              <WorkCard
                imgSrc={W1}
                imgAlt="Box Stock"
                headingText="Box Stock"
                descText="Inventory Management System"
                hoverText="This inventory management system developed using Next.js, Tailwind CSS, and MongoDB. It is a full-stack web application that allows users to manage their inventory."
                linkg={"https://github.com/NisalShiranda/BoxStock_Inventory-Management-System"}
                linkf={"https://www.figma.com/design/W0WeQXm93i1ELVMEqtHRGC/BoxStock?node-id=0-1&t=NyJPu6uJWRJGk186-1"}
                linkb={"https://www.behance.net/gallery/200250909/BoxStock-Inventory-Management-System-Website-UI"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W2}
                imgAlt="Studio"
                headingText="Studio"
                descText="Furniture Landing Page"
                hoverText="“Introducing our stunning Furniture Landing Page, crafted with React.js and Tailwind CSS. This sleek and modern webpage is designed to captivate your audience with its clean aesthetics and smooth functionality."
                linkg={"https://github.com/NisalShiranda/studio_furnitureLandingPage"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W3}
                imgAlt="Wizardz"
                headingText="Wizardz"
                descText="Agency Landing Page"
                hoverText="Introducing Wizardz, a fully responsive agency website created with React.js and Tailwind CSS."
                linkg={"https://github.com/NisalShiranda/wizardz"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W4}
                imgAlt="Job Finder"
                headingText="Job Finder"
                descText="Job finding Website"
                hoverText="Introducing JobFinder, a dynamic job search platform powered by the MERN stack and styled with Tailwind CSS. "
                linkg={"https://github.com/NisalShiranda/JobFinder"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W5}
                imgAlt="WeGuide"
                headingText="WeGuide"
                descText="Travel Website"
                hoverText="Travel Website using reactjs and fully responsive"
                linkg={"https://github.com/NisalShiranda/WeGuide-Travel-Website"}
                linkf={"https://www.figma.com/design/u4d5yMZDHFps1VWcHXGasi/Travel-Guide-Finding-System?node-id=1-6&t=7uYF9US6TinnmK2e-1"}
                linkb={"https://www.behance.net/gallery/200398839/Travel-Website-UIUX-Design-WeGuide"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W6}
                imgAlt="Portfolio"
                headingText="My Portfolio"
                descText="My portfolio landing page"
                hoverText="Created My portfolio with my own style and It`s all about same color theme."
                linkg={"https://github.com/NisalShiranda/MyPortfolio"}
                 linkf={"https://www.figma.com/design/fUuxFfdyZaxRovV3gdS8iW/MyPortfolio?node-id=0-1&t=ZHRhh5VCnQNPkMYV-1"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W7}
                imgAlt="inc"
                headingText="inc"
                descText="Agency Website"
                hoverText="Inc is an agency website developed using reactjs and tailwind css. "
                linkg={"https://github.com/NisalShiranda/inc"}
                // linkf={"https://www.figma.com/design/fUuxFfdyZaxRovV3gdS8iW/MyPortfolio?node-id=0-1&t=ZHRhh5VCnQNPkMYV-1"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W8}
                imgAlt="pumpit"
                headingText="Pumpit"
                descText="Clone the pumpit official landing page"
                hoverText="I cloned pumpit official landing page using reactjs and tailwind css. This web page style called glassmorphism"
                linkg={"https://github.com/NisalShiranda/pumpit"}
                // linkf={"https://www.figma.com/design/fUuxFfdyZaxRovV3gdS8iW/MyPortfolio?node-id=0-1&t=ZHRhh5VCnQNPkMYV-1"}
              />
            </div>
            
          </div>
        </div>
      </div>
    

      <div className={toggle === 3 ? "toggle" : "notfound"}>
      <div className="toggle pt-5">
          <div className="grid grid-cols-1 py-4 gap-8 px-[50px] lg:px-[200px] sm:grid sm:grid-cols-2 md:grid-cols-3">
            <div>
              <WorkCard
                imgSrc={U1}
                imgAlt="Pup Love"
                headingText="Pup Love"
                descText="Website Landing Page"
                hoverText= "PupLove is a heartfelt project aimed at connecting shelter animals with their forever homes."
                // linkg={"https://github.com/NisalShiranda/BoxStock_Inventory-Management-System"}
                linkf={"https://www.figma.com/proto/SsinN2tqKGQf5kd8U0XkS6/PupLove?node-id=0-1&t=JhCzjPrnHOxj2kXG-1"}
                linkb={"https://www.behance.net/gallery/199996257/PupLove-Website-%28Homes-for-shelter-animals%29"}
              />
              
            </div>
            <div>
              <WorkCard
                imgSrc={U2}
                imgAlt="WeGuide"
                headingText="WeGuide"
                descText="Travel website Landing Page"
                hoverText="WeGuide” is a travel guide web application with intuitive navigation, attractive visuals, and seamless interaction."
                linkg={"https://github.com/NisalShiranda/WeGuide-Travel-Website"}
                linkf={"https://www.figma.com/design/u4d5yMZDHFps1VWcHXGasi/Travel-Guide-Finding-System?node-id=1-6&t=7uYF9US6TinnmK2e-1"}
                linkb={"https://www.behance.net/gallery/200398839/Travel-Website-UIUX-Design-WeGuide"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W1}
                imgAlt="Box Stock"
                headingText="Box Stock"
                descText="Inventory Management System"
                hoverText="This inventory management system developed using Next.js, Tailwind CSS, and MongoDB. It is a full-stack web application that allows users to manage their inventory."
                linkg={"https://github.com/NisalShiranda/BoxStock_Inventory-Management-System"}
                linkf={"https://www.figma.com/design/W0WeQXm93i1ELVMEqtHRGC/BoxStock?node-id=0-1&t=NyJPu6uJWRJGk186-1"}
                linkb={"https://www.behance.net/gallery/200250909/BoxStock-Inventory-Management-System-Website-UI"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={U3}
                imgAlt="Dashboard"
                headingText="BoxStock - Dashboard"
                descText="Dashboard Design"
                hoverText="Designed an intuitive, data-driven dashboard for BoxStock's inventory management system, providing users with clear and actionable insights."
                linkg={"https://github.com/NisalShiranda/BoxStock_Inventory-Management-System"}
                linkf={"https://www.figma.com/design/Tfi8OgmgKR0DZVM8nwBabM/e-commerce-dashboard-(Project)?node-id=0-1&t=y7V8J0o5HImGRs4E-1"}
                linkb={"https://www.behance.net/gallery/200393285/Dashboard-UIIX-Inventory-Management-System"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={U4}
                imgAlt="Kandos"
                headingText="Kandos Landing Page"
                descText="Chocolate Factory landing page"
                hoverText="Redesign kandos chocolate factory landing page using Neo Brutalism style."
                // linkg={"https://github.com/NisalShiranda/BoxStock_Inventory-Management-System"}
                linkf={"https://www.figma.com/design/E2a9iTuPeWaP91CkeiD3yc/Kandos?node-id=0-1&t=eE0cnv2iezjYn6fB-1"}
                linkb={"https://www.behance.net/gallery/200529501/Neo-Brutalism-Web-UIUX-Design"}
              />
              
            </div>
            <div>
              <WorkCard
                imgSrc={U5}
                imgAlt="PizzaHut"
                headingText="PizzaHut"
                descText="App UI Redesign"
                hoverText="Redesigned the Pizza Hut mobile application, focusing on a modern and visually appealing interface with an enhanced user experience."
                linkf={"https://www.figma.com/proto/PWNJNdFswLaCCk0LfqCvgh/Pizza-App?page-id=0%3A1&node-id=1-2&viewport=609%2C78%2C0.14&t=ZXirPbpP4oQ9c29U-1&scaling=scale-down&starting-point-node-id=1%3A2"}
                linkb={"https://www.behance.net/gallery/200239951/PizzaHut-Mobile-Application-Redesign"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={W6}
                imgAlt="Portfolio"
                headingText="My Portfolio"
                descText="My portfolio landing page"
                hoverText="Created My portfolio with my own style and It`s all about same color theme."
                linkg={"https://github.com/NisalShiranda/MyPortfolio"}
                linkf={"https://www.figma.com/design/fUuxFfdyZaxRovV3gdS8iW/MyPortfolio?node-id=0-1&t=ZHRhh5VCnQNPkMYV-1"}
              />
            </div>
            <div>
              <WorkCard
                imgSrc={U6}
                imgAlt="Unigig"
                headingText="UNIGIGS"
                descText="Job finding applications for undergraduates"
                hoverText="Created colourful UI design for job finding application called UNIGIGS"
                // linkg={}
                linkf={"https://www.figma.com/proto/HbQ5YGzyBvieEgyRkxwJo3/UniGigs?t=AaUWePTqvk9DbGyV-1"}
                linkb={"https://www.behance.net/gallery/203550137/UNIGIGS"}
              />
            </div>
           
          </div>
        </div>
      </div>

      <div className={toggle === 4 ? "toggle" : "notfound"}>
      <div className="toggle pt-5">
          <div className="grid grid-cols-1 py-4 gap-8 px-[50px] lg:px-[200px] sm:grid sm:grid-cols-2 md:grid-cols-3">
            <div>
              <WorkCard
                imgSrc={G1}
                imgAlt="Social Media Post"
                headingText="Burger Social Media Post"
                descText="Social Media Post Design"
                hoverText= "Social Media Post Design"
                // linkg={HideImage}
                // linkf={"https://www.figma.com/proto/SsinN2tqKGQf5kd8U0XkS6/PupLove?node-id=0-1&t=JhCzjPrnHOxj2kXG-1"}
                // linkb={"https://www.behance.net/gallery/199996257/PupLove-Website-%28Homes-for-shelter-animals%29"}
              />
            </div>

            

            <div>
              <WorkCard
                imgSrc={G3}
                imgAlt="Social Media Post"
                headingText="Class Social Media Post"
                descText="Social Media Post Design"
                hoverText= "Social Media Post Design"
                // linkg={HideImage}
                // linkf={"https://www.figma.com/proto/SsinN2tqKGQf5kd8U0XkS6/PupLove?node-id=0-1&t=JhCzjPrnHOxj2kXG-1"}
                // linkb={"https://www.behance.net/gallery/199996257/PupLove-Website-%28Homes-for-shelter-animals%29"}
              />
            </div>

            <div>
              <WorkCard
                imgSrc={G4}
                imgAlt="Social Media Post"
                headingText="Family Group Social Media Post"
                descText="Social Media Post Design"
                hoverText= "Social Media Post Design"
                // linkg={HideImage}
                // linkf={"https://www.figma.com/proto/SsinN2tqKGQf5kd8U0XkS6/PupLove?node-id=0-1&t=JhCzjPrnHOxj2kXG-1"}
                // linkb={"https://www.behance.net/gallery/199996257/PupLove-Website-%28Homes-for-shelter-animals%29"}
              />
            </div>

            <div>
              <WorkCard
                imgSrc={G2}
                imgAlt="Social Media Post"
                headingText="Business Social Media Post"
                descText="Social Media Post Design"
                hoverText= "Social Media Post Design"
                // linkg={HideImage}
                // linkf={"https://www.figma.com/proto/SsinN2tqKGQf5kd8U0XkS6/PupLove?node-id=0-1&t=JhCzjPrnHOxj2kXG-1"}
                // linkb={"https://www.behance.net/gallery/199996257/PupLove-Website-%28Homes-for-shelter-animals%29"}
              />
            </div>

            <div>
              <WorkCard
                imgSrc={G5}
                imgAlt="Social Media Post"
                headingText="Business Social Media Post"
                descText="Social Media Post Design"
                hoverText= "Social Media Post Design"
                // linkg={HideImage}
                // linkf={"https://www.figma.com/proto/SsinN2tqKGQf5kd8U0XkS6/PupLove?node-id=0-1&t=JhCzjPrnHOxj2kXG-1"}
                // linkb={"https://www.behance.net/gallery/199996257/PupLove-Website-%28Homes-for-shelter-animals%29"}
              />
            </div>

            <div>
              <WorkCard
                imgSrc={G6}
                imgAlt="Social Media Post"
                headingText="Business Social Media Post"
                descText="Social Media Post Design"
                hoverText= "Social Media Post Design"
                // linkg={HideImage}
                // linkf={"https://www.figma.com/proto/SsinN2tqKGQf5kd8U0XkS6/PupLove?node-id=0-1&t=JhCzjPrnHOxj2kXG-1"}
                // linkb={"https://www.behance.net/gallery/199996257/PupLove-Website-%28Homes-for-shelter-animals%29"}
              />
            </div>
            
           
          </div>
        </div>
      </div>

      <div className="notfound">
        <p>ooooooooooooNo</p>
      </div>
    </section>
    </>
  )
     



}

export default MyWorks