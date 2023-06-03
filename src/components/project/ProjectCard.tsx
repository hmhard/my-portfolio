import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
   
  export default function ProjectCard() {
    return (
      <Card className="flex-row  max-w-[48rem]">
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/5433/5433756.png?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            One card system
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia totam, autem tenetur saepe eum quaerat, repudiandae alias esse nulla animi ullam vero ipsam molestias consequuntur. Molestiae nemo vitae natus! Quis?
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Explore more
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }