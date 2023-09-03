import { Routes, Route } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductArea/ProductList/ProductList";
import About from "../../AboutArea/About/About";

function Routing(): JSX.Element {
    return (
			<div className="Routing">
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/About" element={<About />} />
				</Routes>
			</div>
		);
}

export default Routing;
