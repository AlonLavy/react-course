import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
	return (
		<div className="Menu">
			<NavLink to="/home">
				<p>Home</p>
			</NavLink>
			<NavLink to="/products">
				<p>Products</p>
			</NavLink>
			<NavLink to="/about">
				<p>About</p>
			</NavLink>
			<NavLink to="/contact">
				<p>Contact Us</p>
			</NavLink>
			<NavLink to="/employees">
				<p>Employees</p>
			</NavLink>
		</div>
	);
}

export default Menu;
