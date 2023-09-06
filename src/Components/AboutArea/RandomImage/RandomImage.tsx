import { useEffect, useState } from "react";
import "./RandomImage.css";
import img1 from "../../../Assets/images/product1.jpg";
import img2 from "../../../Assets/images/product2.jpg";
import img3 from "../../../Assets/images/product3.jpg";
import img4 from "../../../Assets/images/product4.jpg";
import img5 from "../../../Assets/images/product5.jpg";

const images = [img1, img2, img3, img4, img5];

function RandomImage(): JSX.Element {
  const [imageNumber, setImageNumber] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageNumber(Math.floor(Math.random() * images.length));
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
