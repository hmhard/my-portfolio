import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Chip,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { ProjectProps } from "../../shared/types";
import { blueTheme } from "../../theme/blueTheme";
interface Props{
    project: ProjectProps;
}
  export default function ProjectCard({project}:Props) {
    return (
      <Card className="flex-row  max-w-[48rem]" style={{background:blueTheme.body}}>
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
          <a href={project.link}>
            <img 
            src={project.image_url}
            alt={project.name} 
            className="w-full h-full object-cover shadow-xl shadow-blue-gray-900/50"
          />
           </a>
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {project.name}
          </Typography>
           <Typography variant="h6" color="blue" className="mb-2">
            {project.company}
          </Typography>
          <Typography color="gray" className="font-normal mb-3">
         {project.description}
          </Typography>
          
        <div className="block mb-3">
          {project.technologies?.map((tech,index)=>
          <Chip className="inline" key={index} variant="outlined" value={tech} />
          
          )}
          </div>  
        
          <a href={project.link} className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Explore more
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }