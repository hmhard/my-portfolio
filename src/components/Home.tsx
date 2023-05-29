import { Typography, Card, CardBody } from "@material-tailwind/react";
import { personal_info } from "../data/general_data";
import { blueTheme } from "../theme/blueTheme";

export default function Home() {
    return (
        <Card className="rounded-xl" style={{ backgroundColor:blueTheme.body }}>
            <CardBody>
                <Typography
                >
                    {personal_info.fullName}
                </Typography>
                <div>
                <Typography variant="span">
                    <span>Email:</span>{personal_info.email}
                </Typography>
                 <Typography variant="span">
                    <span>Phone:</span>{personal_info.email}
                </Typography>
                </div>
                <Typography>
                    {personal_info.subtitle}
                </Typography>
            </CardBody>

        </Card>

    );
}