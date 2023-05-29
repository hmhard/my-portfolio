import { experience_data } from "../data/experience_data";
import ExperienceCard from "./experienceCard/ExperienceCard";
import HeaderText from "./HeaderText";

export default function Experience() {
    return (
      <div>
            {experience_data.sections.map((section, ind) => (
                <div>
                    <HeaderText text={section.title} />
                    <div>
                        {section.experiences.map((experience, index) => (
                          <ExperienceCard experience={experience} totalCards={section.experiences.length} index={index} />
                        ))}
                    </div>

                </div>
            ))};
        
        </div>
    );
}