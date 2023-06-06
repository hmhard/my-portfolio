import React, {  } from "react";
import "./OrganizationList.css";

import { Fade } from "react-awesome-reveal";
import { Tooltip } from "@material-tailwind/react";
interface Props{
  logos:any
}
export default function OrganizationList ({logos}:Props) {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {logos.map((logo:any) => {
            return (
              <Tooltip content={logo.login} >

                <li className="organizations-inline" >
                  <Fade  duration={2000}>
                    <img
                      className="organizations-img"
                      src={logo["avatarUrl"]}
                      alt={logo["login"]}
                      />
                  </Fade>
                </li>
                      </Tooltip>
            );
          })}
        </ul>
      </div>
    );

}
