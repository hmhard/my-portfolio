import React, {  } from "react";
import "./Certifications.css";
import { blueTheme } from "../../theme/blueTheme";
import { Fade } from "react-awesome-reveal";
import { certifications } from "../../data/certificate_data";
import { Avatar, Chip,  Typography } from "@material-tailwind/react";

function Certifications () {
 


    const theme = blueTheme;
    return (
      <div id="cer">
        <div >
          <Fade duration={2000} >
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </Fade>
        </div>
      
            <table className="w-ful min-w-max table-auto table-borderless text-left" style={{margin:'auto', width:'70%'}}>
              <tbody>
                {certifications.map(
                  ({ logo_path, title,certificate_link,   alt_name }, index) => {
                    const isLast = index === certifications.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={title}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={logo_path}
                              alt={title}
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                            <Typography variant="small" color="blue-gray" className="font-bold">
                              {title}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <a href={certificate_link} target="_blank" rel="noreferrer">
                            <Chip
                              size="sm"
                              variant="ghost"
                              value={alt_name}
                              color={
                                alt_name === "paid" ? "green" : alt_name === "pending" ? "amber" : "red"
                              }
                            /></a>
                          </div>
                        </td>
                       
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
        
      </div>
    );
  
}

export default Certifications;
