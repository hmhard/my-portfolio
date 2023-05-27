import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Avatar,
    Card,
    CardBody,
} from "@material-tailwind/react";
import HeaderText from "./HeaderText";
import DegreeCard from "./degreeCard/DegreeCard";
import { educational_data } from "../data/educational_data";
import { blueTheme } from "../theme/blueTheme";

export default function Education() {
  
   
    return (
        <Card className="rounded-xl ml-4 mt-10"
        >
            <CardBody>
                <HeaderText text="Education" />

                <div className="w-full h-full">
                    <Timeline>
                        {educational_data.degrees.map((item, index) =>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader>
                                    <TimelineIcon className="p-0">
                                        <Avatar size="sm" src="/media/ju-logo.png" alt="user 1" withBorder />
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        {item.title}
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                   <DegreeCard degree={item} theme={blueTheme} />
                                </TimelineBody>
                            </TimelineItem>)}

                    </Timeline>
                </div>
            </CardBody>
        </Card>
    );
}