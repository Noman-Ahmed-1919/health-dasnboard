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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">

            <div className="rightmaindiv">

            <div className="scheduleheader">
              <div className="firstdiv">
                <h5>Schedule Appointment</h5>
              </div>

              <div className="maininp">
             
                <div>
                  <p>Specialist Name</p>

                  <input className="inpdoc" placeholder="Select A doctor" />
                  <img style={{marginTop:"-60px", marginLeft:"370px"}} src={updown}/>
                 
<div className="dropdown">

<div className="select">
  <div className="caret"></div>

</div>


                  <ul className="menu" style={{marginRight:"20px"}}>
                  <li>
                    <div style={{display:"flex"}}>
                      <img src={gpdoc1} style={{borderRadius:"100%", height:"50px", width:"50px"}}/>
                      <div style={{marginLeft:"10px"}}>
                      <h6>Emma Waston</h6>
                      <p>GP Doctor</p>
                      </div>
                     
                    </div>
                  </li>
                  <li>
                  <div style={{display:"flex"}}>
                      <img src={gpdoc2} style={{borderRadius:"100%", height:"50px", width:"50px"}}/>
                      <div style={{marginLeft:"10px"}}>
                      <h6>Anna Karenina</h6>
                      <p>GP Doctor</p>
                      </div>
                     
                    </div>                 
                     </li>

                    <li>
                  <div style={{display:"flex"}}>
                      <img src={gpdoc3} style={{borderRadius:"100%", height:"50px", width:"50px"}}/>
                      <div style={{marginLeft:"10px"}}>
                      <h6>John Lee</h6>
                      <p>GP Doctor</p>
                      </div>
                     
                    </div>                  
                    </li>
                </ul>



 </div>  
{/* // This is dropdown first div end  */}



                </div>

                <div>
                  <p>Department</p>

                  <div >
                  <input className="inpdoc" style={{ marginLeft: "10px" }} placeholder="GP Department"/>
                  <img style={{marginTop:"-60px", marginLeft:"380px"}} src={updown}/>
                  </div>

                </div>
            
            
            
              </div>

              <h3
                style={{
                  textAlign: "center",
                  marginTop: "40px",
                  marginBottom: "20px",
                }}
              >
                GP Department (23)
              </h3>

              <div className="secdiv">
                <div className="docimages">
                  <div>
                    <img src={doc1} />
                  </div>

                  <div>
                    <img src={doc2} />
                  </div>

                  <div>
                    <img src={doc3} />
                  </div>

                  <div>
                    <img src={doc4} />
                  </div>
                </div>
              </div>

              <div className="thirddiv">
                <div className="docimages">
                  <div>
                    <img src={doc5} />
                  </div>

                  <div>
                    <img src={doc6} />
                  </div>

                  <div>
                    <img src={doc7} />
                  </div>

                  <div>
                    <img src={doc8} />
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

          <div className="col-md-4" style={{ padding: "0px" }}>
            <div className="rightspecialdoc">
              <div className="specialdoc">
                <h5>Specialist doctor</h5>
              </div>
              <img style={{ width: "100%" }} src={rdoc1} />
            </div>

            <div className="rightspecialdoc" style={{marginTop:"55px"}}>
              <div className="specialdoc">
                <h5>Patient Profile</h5>
              </div>
              <img style={{ width: "100%",height:"310px" }} src={rrdoc1} />
            </div>
          </div>
        </div>
      </div>





    </>
  );
};

export default Mainpage;
