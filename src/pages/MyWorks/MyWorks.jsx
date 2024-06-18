import "./MyWorks.css"
import { useState } from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Tab from 'react-bootstrap/Tab';
// import Row from 'react-bootstrap/Row';

import {WorkCard} from '../../components/WorkCard'



 import P1 from "../../../public/Hero Section.png"
 import P2 from "../../../public/images.jpeg"




function MyWorks(   ) {

  const [toggle,setToggle] = useState(1);

  function updateToggle(id){
    setToggle(id)
  }
  
 
  return (
    <>
      <div className="myworks">
        <div className="myworks-title pt-5 px-[50px]">
          <p className="text-[#F5D10D] text-[2rem] text-center font-bold">
            MY WORKS
          </p>
          <p className="text-white text-center font-light">
            Here are some of the projects I have worked on. Click on the project
            to view more details.
          </p>
        </div>
      </div>

      <div>
        <button
          className="bg-white px-5 py-2 mx-2"
          onClick={() => updateToggle(1)}
        >
          All
        </button>
        <button
          className="bg-white px-5 py-2 mx-2"
          onClick={() => updateToggle(2)}
        >
          web
        </button>
        <button
          className="bg-white px-5 py-2 mx-2"
          onClick={() => updateToggle(3)}
        >
          UI/UX
        </button>
      </div>

      <div className={toggle === 1 ? "toggle" : "notfound"}>
        <div className="toggle">
          <div className="grid grid-cols-1 py-4 gap-2 px-[50px] lg:px-[200px] sm:grid sm:grid-cols-2 md:grid-cols-4">
            <div className="nisal">
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My first Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P2}
                imgAlt="Picture 2"
                headingText="My Second Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My Third Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My first Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My first Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P2}
                imgAlt="Picture 2"
                headingText="My Second Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My Third Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My first Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={toggle === 2 ? "toggle" : "notfound"}>
      <div className="toggle">
          <div className="grid grid-cols-1 py-4 gap-2 px-[50px] lg:px-[200px] sm:grid sm:grid-cols-2 md:grid-cols-4">
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My first Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P2}
                imgAlt="Picture 2"
                headingText="My Second Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My Third Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My first Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My first Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P2}
                imgAlt="Picture 2"
                headingText="My Second Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            
          </div>
        </div>
      </div>
    

      <div className={toggle === 3 ? "toggle" : "notfound"}>
      <div className="toggle">
          <div className="grid grid-cols-1 py-4 gap-2 px-[50px] lg:px-[200px] sm:grid sm:grid-cols-2 md:grid-cols-4">
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My first Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P2}
                imgAlt="Picture 2"
                headingText="My Second Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My Third Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My first Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My first Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P2}
                imgAlt="Picture 2"
                headingText="My Second Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
            <div>
              <WorkCard
                imgSrc={P1}
                imgAlt="Picture 1"
                headingText="My Third Work"
                descText="Nisal Shiranda Ranasinghe I used Figma to work"
                hoverText="Mobile"
              />
            </div>
           
          </div>
        </div>
      </div>

      <div className="notfound">
        <p>ooooooooooooNo</p>
      </div>
    
    </>
  )
     



}

export default MyWorks