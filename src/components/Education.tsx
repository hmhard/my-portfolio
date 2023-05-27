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

export default function Education() {
    const blueTheme = {
        body: "#EDF9FE",
        text: "#001C55",
        expTxtColor: "#000a12",
        highlight: "#A6E1FA",
        dark: "#00072D",
        secondaryText: "#7F8DAA",
        imageHighlight: "#0E6BA8",
        compImgHighlight: "#E6E6E6",
        jacketColor: "#0A2472",
        headerColor: "#0E6BA877",
        splashBg: "#001C55",
      };
    const degrees = {
        degrees: [
          {
            title: "Jimma University",
            subtitle: "BSc. in Computer Science",
            logo_path: "/media/ju-logo.png",
            alt_name: "Jimma University",
            duration: "2015 - 2019",
            descriptions: [
              "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
              "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
              "⚡ Top Scorer with 3.82/4",
            ],
            website_link: "http://www.ju.edu.et",
          }
         
        ],
      };
      
    return (
        <Card className="rounded-xl ml-4 mt-10"
        >
            <CardBody>
                <HeaderText text="Education" />

                <div className="w-full h-full">
                    <Timeline>
                        {degrees.degrees.map((item, index) =>
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