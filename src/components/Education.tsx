
import HeaderText from "./HeaderText";
import DegreeCard from "./degreeCard/DegreeCard";
import { educational_data } from "../data/educational_data";
import { blueTheme } from "../theme/blueTheme";

export default function Education() {
  
   
    return (
            <div style={{height:'95vh'}}>
                <HeaderText text="Education" />

                <div className="w-full h-full">
                    <div>
                        {educational_data.degrees.map((item, index) =>
                            <div>     
                                <div >
                                   <DegreeCard degree={item} theme={blueTheme} />
                                </div>
                            </div>)}

                    </div>
                </div>
            </div>
       
    );
}