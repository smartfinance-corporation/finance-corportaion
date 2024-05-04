import Navbar from "./nav-bar/page"
import Hero from "./hero/page"
import OurMission from "./our-mission/page"
import About from "./about/page"
import Engagements from "./ourEngagements/page"
import Events from "./flag-ship/page"
import Footer from "./footer/page"

import ActionAreaCard from "./card/page";

export default function homepage(){
    return(<><body>
       
    <Navbar/>
    <Hero/>
    <OurMission/>
    <About/>
    <ActionAreaCard/>
    <Engagements/>
    <Events/>
    <Footer/>
    </body>
    </>)
}