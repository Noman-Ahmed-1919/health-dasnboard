import React from "react";
import Header from "./Header";
import Sidemenu from "./Sidemenu";
import Mainpage from "./Mainpage";
import Scheduleapp from "./Scheduleapp";
import Approuter from "./Approuter";
import Mobilehea from "./Mobilehea";

const Home = () => {
  return (
    <>
      <Header />
      <Mobilehea/>

      <div id="wrapper">
        <Sidemenu />

        <div id="content-wrapper" className="main-dashboard-sitting">
          
          <div id="content">
            <Approuter />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
