import { Typography } from "@material-tailwind/react"
interface Props{
    text: string;

}

export default function  HeaderText ({text}:Props){
    return  <Typography
    color="blue-gray"
      className="my-5 mx-5  text-1xl md:text-2xl lg:text-3xl"
    >
      {text}
    </Typography>
}