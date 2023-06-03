import HeaderText from "../HeaderText";
import ProjectCard from "./ProjectCard";


export default function Projects() {
  
   
    return (
            <div  style={{minHeight:'95vh', margin:20}}>
                <HeaderText text="Projects" />

                <div className="w-full h-full grid grid-cols-2 gap-4">
                 
                       <ProjectCard/>
                       <ProjectCard/>

                   
                </div>
            </div>
       
    );
}