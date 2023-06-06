import { Typography } from "@material-tailwind/react"
import { Fade } from "react-awesome-reveal";
import { blueTheme } from "../theme/blueTheme";
interface Props{
    text: string;

}

export default function  HeaderText ({text}:Props){
    return   <Fade  duration={2000} >
    <h1 className="organizations-header" style={{ color: blueTheme.text }}>
      {text}
    </h1>
  </Fade>
}