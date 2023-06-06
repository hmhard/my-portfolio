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
import { Fade } from "react-awesome-reveal";
interface Props {
  project: ProjectProps;
}
export default function ProjectCard({ project }: Props) {
  return (
    <Fade duration={2000}>
      <Card className="w-full  shadow-lg" style={{ background: blueTheme.body }}>
        <CardHeader shadow={false} floated={false} className="">
          <a href={project.link}>
            <img
              src={project.image_url}
              alt={project.name}
              style={{ maxHeight: 200, minHeight: 200 }}
              className="w-full  object-cover shadow-xl shadow-blue-gray-900/50"
            />
          </a>
        </CardHeader>
        <CardBody>
          <div className="mb-3  items-center justify-between">

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
              {project.technologies?.map((tech, index) =>
                <Chip className="inline mr-2" key={index} variant="outlined" value={tech} />

              )}
            </div>

            <a href={project.link} className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Explore more
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
}