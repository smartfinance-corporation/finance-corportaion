import Link from "next/link";

export default function Events(){
    return(
        <div className="events-container">
            <h1 className="events-header">Our Flag-ship event</h1>
            <a href="#"><img className="events-card" src="https://fcc-did.pages.dev/images/what-cards/special%20hovercard1%20(3).png">
</img></a>

<a href="#"><img className="events-card" src="https://fcc-did.pages.dev/images/what-cards/horizon-card.png"></img></a>
<a href="#"><img className="events-card" src="https://fcc-did.pages.dev/images/what-cards/special%20hovercard2%20(2).png"></img></a>
<div className="newsroom">
    <h1 className="newsroom-header">FCC <span className="newsroom-header-1">Newsroom</span></h1>
    <p className="newsroom-text">Get the latest Market RIZZ at your fingertips</p>
    <Link href="../components/register/SignUp" className="subscribe-button">Subscribe</Link>
</div>
        </div>
    )
}