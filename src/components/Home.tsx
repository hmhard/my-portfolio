import { Typography, Card, CardBody } from "@material-tailwind/react";
import { personal_info } from "../data/general_data";
import { blueTheme } from "../theme/blueTheme";
import './Main.css'

export default function Home() {
    return (
        <div className="h-full" id="home" style={{height:'95vh'}}>
        <Card className="rounded-xl h-full w-full" style={{ backgroundColor:blueTheme.body }}>
            <CardBody>
                <Typography  className='text-4xl mt-5'>
                    Hello<span className="ml-4">👋</span>
                </Typography>
                <Typography>
                    {/* {personal_info.subtitle} */}
                </Typography>
                <div  style={{ maxWidth: 700, fontSize: '2.5rem', paddingTop:30, paddingBottom:30 }}>
              
           <div className="typewriter">I'm {personal_info.fullName},</div>
           <div>{personal_info.subtitle} </div>
               </div>
            </CardBody>
            <div style={{paddingLeft:20, fontSize:'24px'}}>Get in touch: <a style={{textDecoration:'underline'}} href='mailto:miniye6453@gmail.com' target="_blank">{personal_info.email}</a></div>

        </Card>
        </div>

    );
}