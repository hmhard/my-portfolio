import { Typography, Button } from "@material-tailwind/react";
import { personal_info } from "../data/general_data";
 
export default function Home() {
  return (
    <div className="rounded-xl" 
    >
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="Just Random"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h2"
              color="white"
              className="mb-4 text-2xl md:text-3xl lg:text-4xl"
            >
              {personal_info.fullName}
            </Typography>
             <Typography
              variant="p"
              color="white"
            >
              ({personal_info.email})
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 opacity-80"
            >
               {personal_info.subtitle}
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}