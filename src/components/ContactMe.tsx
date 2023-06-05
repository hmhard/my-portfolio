import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { blueTheme } from "../theme/blueTheme";
import HeaderText from "./HeaderText";
import { personal_info } from "../data/general_data";

export default function ContactMe() {
    return (
        <div id="contactme" style={{minHeight:'95vh'}}>
   <HeaderText text="Contact me"/>
        <Card className="flex-row w-full " style={{ backgroundColor:blueTheme.body,height:'95vh', marginLeft:20 }}>
            <CardHeader shadow={false} floated={false} className="w-2/6 shrink-0 m-0 rounded-r-none" style={{backgroundColor:blueTheme.body,}}>
                <img
                className="h-96 w-96 rounded-lg"
                    src="/media/mine2.jpg"
                    alt="miniyahil kebede"
                    width={'100%'}
                    height={'auto'}
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="blue" className="uppercase mb-4">Contact me</Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    I am there whereever you are just one click away
                </Typography>
                <Typography color="gray" className="font-normal mb-8">
                
                I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Full Stack development, React, Spring Boot, Android, Website.
                </Typography>
               
                    <div>
                        <Typography variant="small" color="gray" className="font-normal">
                            <b>Gmail: </b>miniye6453@gmail.com
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            <b>Pnone: </b>+251946553371
                        </Typography>
                         <Typography variant="small" color="gray" className="font-normal">
                            <b>Github: </b> <a href="gitgub.com/hmhard" className="inline-block">hmhard</a>
                        </Typography>
                    </div>
                
                <a href={personal_info.resume_link} target="_blank" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        View My Resume
                        <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                    </Button>
                </a>
            </CardBody>
        </Card>
        </div>

    );
}