import { Typography, Card, CardBody } from "@material-tailwind/react";
import { personal_info } from "../data/general_data";
import { blueTheme } from "../theme/blueTheme";

export default function Home() {
    return (
        <Card className="rounded-xl" style={{ backgroundColor:blueTheme.body }}>
            <CardBody>
                <Typography  className='text-4xl' color='black'>
                    {personal_info.fullName}
                </Typography>
                <Typography>
                    {personal_info.subtitle}
                </Typography>
                <div>
                <Typography variant="span">
                    <Typography  className='inline' color="blue">Email: </Typography>{personal_info.email}
                </Typography>
                 <Typography variant="span">
                    <Typography className='inline' color="blue">Phone: </Typography>{personal_info.phone}
                </Typography>
                </div>
               
            </CardBody>

        </Card>

    );
}