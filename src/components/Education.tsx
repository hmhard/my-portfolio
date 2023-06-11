
import HeaderText from "./HeaderText";
import DegreeCard from "./degreeCard/DegreeCard";
import { educational_data } from "../data/educational_data";
import { blueTheme } from "../theme/blueTheme";
import { certifications } from "../data/certificate_data";
import Certifications from "./certifications/Certifications";

export default function Education() {


    return (
        <div id="education" style={{ minHeight: '95vh' }}>
            <HeaderText text="Education" />

            <div className="w-full h-full">
                <div>
                    {educational_data.degrees.map((item, index) =>
                        <div>
                            <div >
                                <DegreeCard degree={item} theme={blueTheme} />
                            </div>
                        </div>)}

                <div className="w-full h-full mt-10" style={{width:'95%', marginLeft:'5px'}}>
                    <Certifications />
                </div>
                </div>
            </div>
        </div>

    );
}