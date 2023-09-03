import WhoAreWe from "../WhoAreWe/WhoAreWe";
import "./About.css";

function About(): JSX.Element {
	return (
		<div className="About">
			<p>
				<WhoAreWe></WhoAreWe>
			</p>
		</div>
	);
}

export default About;
