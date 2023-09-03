import "./Home.css";
import fruitsAndVeggies from "../../../Assets/food.png";
import drinks from "../../../Assets/drinks.jpg";
import { useState } from "react";
import Switch from "react-switch";
import { deserialize } from "v8";

function Home(): JSX.Element {
	const [counter, setCounter] = useState(0);
	const desserts = [
		{ id: 1, name: "Ice cream", price: 3 },
		{ id: 2, name: "Marshmallow", price: 2 },
		{ id: 3, name: "Cake", price: 4 },
		{ id: 4, name: "Chocolate", price: 1 },
	];

	const today = new Date().getDay();
	return (
		<div className="Home">
			<p>Home</p>
			<br />
			<Switch
				checked={counter % 2 === 1 ? false : true}
				onChange={() => {
					setCounter(counter + 1);
				}}
			/>
			<p>Clicked: {counter}</p>
			<br />
			<img src={counter % 2 === 1 ? fruitsAndVeggies : drinks}></img>
			{desserts.map((dessert: { id: number; name: string; price: number }) => {
				return (
					<div key={dessert.id * 10}>
						<br key={dessert.id * 5} />
						<span key={dessert.id}>
							{" "}
							{dessert.name}, {dessert.price}
						</span>
					</div>
				);
			})}
			<p>{today === 5 || today === 6 ? "Weekend Sale" : "Weekday Sale"}</p>
		</div>
	);
}

export default Home;
