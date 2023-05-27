import { Typography } from "@material-tailwind/react"
interface Props{
    text: string;

}

export default function  HeaderText ({text}:Props){
    return  <Typography
    color="blue-gray"
      className="mb-4 text-1xl md:text-2xl lg:text-3xl"
    >
      {text}
    </Typography>
}