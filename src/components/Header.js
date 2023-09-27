import React from "react";
import logo2 from "../images/logo.png";
import layer from "../images/layer.png";
import bell from "../images/bell.png"
import sitting from "../images/sitting.png"
import man from "../images/man.png"
import search from "../images/search.png"

const Header = () => {
  return (
    <>
      <div className="header">

<div className="sub-header">

        <div style={{ display: "flex" }}>
         
          <img style={{ height:"15px", marginTop:"10px" }} src={layer} />
          <img style={{width:"170px", height:"50px", marginTop:"-08px"}} src={logo2} />

<div className="inputsearch" type="text" placeholder="search" >

{/* <input className="inputsearch" type="text" placeholder="search"/> */}
<div style={{display:"flex"}}>
<img style={{marginTop:"-7px", marginLeft:"05px",marginRight:"08px", width:"17px", height:"17px"}} src={search}  />
<p style={{marginTop:"-10px", color:"gray"}}>Search</p>
</div>


</div>

        </div>


<div>
<img src={sitting} style={{paddingLeft:"10px"}} />
<img src={bell} style={{paddingLeft:"10px", marginRight:"10px"}}/>
<img src={man} style={{borderRadius:"100px", marginRight:"0px", height:"24px"}} />

</div>

</div>

      </div>
    </>
  );
};

export default Header;
