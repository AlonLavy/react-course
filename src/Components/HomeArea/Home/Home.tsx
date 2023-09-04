import { useState } from "react";
import Switch from "react-switch";
import drinks from "../../../Assets/drinks.jpg";
import fruitsAndVeggies from "../../../Assets/food.png";

import img1 from "../../../Assets/product1.jpg";
import img2 from "../../../Assets/product2.jpg";
import img3 from "../../../Assets/product3.jpg";
import img4 from "../../../Assets/product4.jpg";
import img5 from "../../../Assets/product5.jpg";
import "./Home.css";
import Search from "../Search/Search";

function Home(): JSX.Element {
	const [counter, setCounter] = useState(0);
	const desserts = [
		{ id: 1, name: "Ice cream", price: 3 },
		{ id: 2, name: "Marshmallow", price: 2 },
		{ id: 3, name: "Cake", price: 4 },
		{ id: 4, name: "Chocolate", price: 1 },
	];

	const images = [
		{ id: 1, image: img1, name: "hello1" },
		{ id: 2, image: img2, name: "hello2" },
		{ id: 3, image: img3, name: "hello3" },
		{ id: 4, image: img4, name: "hello4" },
		{ id: 5, image: img5, name: "hello5" },
	];

	const today = new Date().getDay();
	return (
		<div className="Home">
			<p>Home</p>
			<br />
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				Change Image
			</button>
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
			<div>
				{images.map((image) => {
					return (
						<div key={image.id * 20} className="flexColumn">
							<img src={image.image} key={image.id}></img>
							<span key={image.id * 10}>{image.name}</span>
						</div>
					);
				})}
			</div>
			<p>{today === 5 || today === 6 ? "Weekend Sale" : "Weekday Sale"}</p>

			<Search />
		</div>
	);
}

export default Home;
