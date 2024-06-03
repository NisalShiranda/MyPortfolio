import "./MyWorks.css"
import {WorkCard} from "../../components/WorkCard"
// import ProjectCard from "../../components/ProjectCard"
import P1 from "../../../public/Hero Section.png"
import P2 from "../../../public/images.jpeg"



function MyWorks() {
  return (
    <>
        <div className="myworks">
            <div className="myworks-title pt-5 px-[50px]">
                <p className="text-[#F5D10D] text-[2rem] text-center font-bold">MY WORKS</p>
                <p className="text-white text-center font-light">Here are some of the projects I have worked on. Click on the project to view more details.</p>
            </div>
          </div>
    



        <div className="grid grid-cols-1 py-4 gap-2 px-[50px] lg:px-[200px] sm:grid sm:grid-cols-2 md:grid-cols-4">
            <div>
            <WorkCard 
              imgSrc = {P1}
              imgAlt = "Picture 1"
              headingText = "My first Work"
              descText = "Nisal Shiranda Ranasinghe I used Figma to work"
              hoverText = "Mobile" />
            </div>
            <div>
            <WorkCard 
              imgSrc = {P2}
              imgAlt = "Picture 2"
              headingText = "My Second Work"
              descText = "Nisal Shiranda Ranasinghe I used Figma to work"
              hoverText = "Mobile"
            
             />
            </div>
            <div><WorkCard 
              imgSrc = {P1}
              imgAlt = "Picture 1"
              headingText = "My Third Work"
              descText = "Nisal Shiranda Ranasinghe I used Figma to work"
              hoverText = "Mobile"
            
             /></div>
            <div><WorkCard 
              imgSrc = {P1}
              imgAlt = "Picture 1"
              headingText = "My first Work"
              descText = "Nisal Shiranda Ranasinghe I used Figma to work"
              hoverText = "Mobile"
            
             /></div>
             <div>
            <WorkCard 
              imgSrc = {P1}
              imgAlt = "Picture 1"
              headingText = "My first Work"
              descText = "Nisal Shiranda Ranasinghe I used Figma to work"
              hoverText = "Mobile"
              />
              
            </div>
            <div>
            <WorkCard 
              imgSrc = {P2}
              imgAlt = "Picture 2"
              headingText = "My Second Work"
              descText = "Nisal Shiranda Ranasinghe I used Figma to work"
              hoverText = "Mobile"
            
             />
            </div>
            <div><WorkCard 
              imgSrc = {P1}
              imgAlt = "Picture 1"
              headingText = "My Third Work"
              descText = "Nisal Shiranda Ranasinghe I used Figma to work"
              hoverText = "Mobile"
            
             /></div>
            <div><WorkCard 
              imgSrc = {P1}
              imgAlt = "Picture 1"
              headingText = "My first Work"
              descText = "Nisal Shiranda Ranasinghe I used Figma to work"
              hoverText = "Mobile"
            
             /></div>
        </div>
    </>
  )
}

export default MyWorks