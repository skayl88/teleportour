import React from "react";
import classes from "./AboutProducts.module.css";
import { NavBarMob } from "../../components/navbarMob/NavBarMob";

export const AboutProducts = () => {
  //get isOpen from NavBarMob


  let isMobile = false;
  if (window.innerWidth < 1050) {
    isMobile = true;
  }
  console.log(isMobile);

  return (
    
    <div className="content_page">
      <div className={classes.wraper}>
        <div className={classes.main}>
          <div className={classes.AboutProducts}>
            <div className={classes.title}>
              <h2>How it Works?</h2>
            </div>
            <div className={classes.text}>
              <p>
                Here is how it works: the local guides make live streams from
                their locations using 360 cameras. They show unique places, tell
                stories, and interact with the audience while broadcasting.
              </p>
              <p>
                Remote travelers from any other locations (at the same time) can
                watch, ask questions, get answers and be engaged with their
                guide and each other.
              </p>

              <p>
                For watching, a VR headset is not required, but it's recommended
                to get a fully immersive experience. Travelers can also engage
                with guides using a smartphone, PC or a tablet.
              </p>
              <p>
                For local guides with 360 cameras our platform becomes a
                monetisation tool. They make money from each stream and each
                traveler. Local guides become content creators on TELEPORTOUR
                platform, and we share income with them.
              </p>
              <p>
                To be able to broadcast, local guides need to use a 360 camera
                which can be their own or a rented one. [We are also developing
                our own 360-camera rig, which will be available only for our
                content creators. Sign up to get updates]
              </p>
              <p>
                We support local guides on each step in their creative journey
                as we are strictly interested in the best content quality. Our
                support includes sharing specific knowledge and hacks in 360
                degree video production and the audience behavioral details to
                consider. For more details contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
