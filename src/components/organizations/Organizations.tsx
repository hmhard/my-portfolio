import React, {  } from "react";
import "./Organizations.css";
import OrganizationList from "../organizationList/OrganizationList";
import { Fade } from "react-awesome-reveal";
import { blueTheme } from "../../theme/blueTheme";
import { organizational_data, organizational_data_local } from "./organization_data";

export default function Organizations () {
  
    return (
      <div id="organizations" style={{minHeight: '95vh'}}>
        <div className="organizations-header-div">
          <Fade  duration={2000} >
            <h1 className="organizations-header" style={{ color: blueTheme.text }}>
              Contributed Organizations
            </h1>
          </Fade>
        </div>
        <OrganizationList logos={organizational_data_local.concat(organizational_data)} />
      </div>
    );
  
}

