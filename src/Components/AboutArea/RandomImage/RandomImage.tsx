import { useEffect, useState } from "react";
import "./RandomImage.css";
import img1 from "../../../Assets/product1.jpg";
import img2 from "../../../Assets/product2.jpg";
import img3 from "../../../Assets/product3.jpg";
import img4 from "../../../Assets/product4.jpg";
import img5 from "../../../Assets/product5.jpg";

const images = [img1, img2, img3, img4, img5];

function RandomImage(): JSX.Element {
	const [imageNumber, setImageNumber] = useState<number>(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setImageNumber(Math.floor(Math.random() * images.length));
			console.log(imageNumber);
		}, 3000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="RandomImage">
			<img src={images[imageNumber]} />
		</div>
	);
}

export default RandomImage;
