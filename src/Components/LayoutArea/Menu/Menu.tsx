import { NavLink } from "react-router-dom";
import "./Menu.css";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";

function Menu(): JSX.Element {
	const user = useSelector((appState: AppState) => appState.user);
	return (
		<div className="Menu">
			<NavLink to="/home">
				<p>Home</p>
			</NavLink>
			<NavLink to="/products" end>
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
			<NavLink to="/products/add">
				<p>Add new product</p>
			</NavLink>
			{user && (
				<NavLink to="/products/top">
					<p>Top Products</p>
				</NavLink>
			)}
			{user && user.role === "Admin" && (
				<NavLink to="/products/out">
					<p>Out Of Stock</p>
				</NavLink>
			)}

			<TotalProducts />
		</div>
	);
}

export default Menu;
