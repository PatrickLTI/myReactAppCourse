import HomeButton from "../components/HomeButton";
import "../components/DisplayMessage.css";




function About() {
    return (
        <div>
            <div className="homeButton">
                <HomeButton />
                <h1>This is the About us message.</h1>
            </div>
        </div>
    )
}

export default About;