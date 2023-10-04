import React from "react";
import doc1 from "../images/doc1.png";
import doc2 from "../images/doc2.png";
import doc3 from "../images/doc3.png";
import doc4 from "../images/doc4.png";
import doc5 from "../images/doc5.png";
import doc6 from "../images/doc6.png";
import doc7 from "../images/doc7.png";
import doc8 from "../images/doc8.png";
import rdoc1 from "../images/rdoc1.png";
import rrdoc1 from "../images/rrdoc1.png";
import updown from "../images/updown.png";
import { NavLink } from "react-router-dom";
import gpdoc1 from "../images/gpdoc1.png";
import gpdoc2 from "../images/gpdoc2.png";
import gpdoc3 from "../images/gpdoc3.png";

const Mainpage = () => {
  return (
    <>
      <div className="container" id="set-width">
        <div className="row">
          <div className="col-xl-8">
            <div className="rightmaindiv">
              <div className="scheduleheader">
                <div className="firstdiv">
                  <h5>Schedule Appointment</h5>
                </div>



           


                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "80px",
                    marginBottom: "40px",
                  }}
                >
                  GP Department (23)
                </h3>

                <div className="secdiv">
                  <div className="docimages">
                    <div>
                      <img style={{width:"100%"}} src={doc1} />
                    </div>

                    <div>
                      <img style={{width:"100%"}}  src={doc2} />
                    </div>

                    <div>
                      <img style={{width:"100%"}}  src={doc3} />
                    </div>

                    <div>
                      <img style={{width:"100%"}}  src={doc4} />
                    </div>
                  </div>
                </div>

                <div className="thirddiv">
                  <div className="docimages">
                    <div>
                      <img style={{width:"100%"}}  src={doc5} />
                    </div>

                    <div>
                      <img style={{width:"100%"}}  src={doc6} />
                    </div>

                    <div>
                      <img style={{width:"100%"}}  src={doc7} />
                    </div>

                    <div>
                      <img style={{width:"100%"}}  src={doc8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
          
            <div className="btnssec">
              <button className="backbtn">Back</button>

              <div>
                <button className="nextbtn btn10">Next Step</button>
              </div>
            </div>
          </div>

          <div className="col-xl-4" >
            <div className="rightspecialdoc">
              <div className="specialdoc">
                <h5>Specialist doctor</h5>
              </div>
              <img style={{ width: "100%" }} src={rdoc1} />
            </div>

            <div className="rightspecialdoc" >
              <div className="specialdoc">
                <h5>Patient Profile</h5>
              </div>
              <img style={{ width: "100%" }} src={rrdoc1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
