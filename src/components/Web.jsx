import { WorkCard } from "./WorkCard";

import P1 from "../../public/Hero Section.png";
import P2 from "../../public/images.jpeg";


function Web() {
  return (
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
  )
}

export default Web