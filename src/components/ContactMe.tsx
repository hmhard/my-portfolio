import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function ContactMe() {
    return (
        <Card className="flex-row w-full ml-5">
            <CardHeader shadow={false} floated={false} className="w-2/6 shrink-0 m-0 rounded-r-none">
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
                
                I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.
                </Typography>
               
                    <div>
                        <Typography variant="small" color="gray" className="font-normal">
                            miniye6453@gmail.com
                        </Typography>
                    </div>
                
                <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        View My Resume
                        <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
}