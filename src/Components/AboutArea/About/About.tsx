import Snackbar from "@mui/material/Snackbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import "./About.css";
import RandomImage from "../RandomImage/RandomImage";

function About(): JSX.Element {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [time, setTime] = useState<string>(null as unknown as string);
	const [clock, setClock] = useState<string>("");
	const navigator = useNavigate();

	const [topProduct, setTopProduct] = useState("---");
	const displayTopProduct = (): void => {
		setTopProduct("Ice coffee");
	};

	useEffect(() => {
		const interval = setInterval(() => {
			console.log(new Date().toLocaleTimeString());
			setClock(new Date().toLocaleTimeString());
		}, 1000);
		return () => {
			clearInterval(interval);
			console.log("closed");
		};
	}, []);

	return (
		<div className="About">
			<WhoAreWe />

			<button onClick={() => setIsOpen(true)}>Show Current Date</button>
			<Snackbar
				open={isOpen}
				autoHideDuration={2500}
				message={new Date().toLocaleDateString()}
				onClose={() => setIsOpen(false)}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
			/>
			<button onClick={() => navigator("/home")}>Back Home</button>
			<button onClick={displayTopProduct}>Display top product</button>
			<span>{topProduct}</span>

			<button onClick={() => setTime(new Date().toLocaleTimeString())}>
				{time === null ? "Show Current Time" : time}
			</button>

			<span>{clock}</span>

			<RandomImage />
		</div>
	);
}

export default About;
