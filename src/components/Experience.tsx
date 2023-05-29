import { Typography } from "@material-tailwind/react";
import { experience_data } from "../data/experience_data";
import ExperienceCard from "./experienceCard/ExperienceCard";
import HeaderText from "./HeaderText";

export default function Experience() {
    return (
       <div>
        <HeaderText text="Experience"/>
      <div style={{width:'95%', marginLeft:'5px'}}>
            {experience_data.sections.map((section, ind) => (
                <div>
                  <Typography variant="h6" color="blue" className=" ml-5 uppercase mb-4">{section.title}</Typography>
               
                    <div>
                        {section.experiences.map((experience, index) => (
                          <ExperienceCard experience={experience} totalCards={section.experiences.length} index={index} />
                        ))}
                    </div>

                </div>
            ))};
        
        </div>
        </div>
    );
}