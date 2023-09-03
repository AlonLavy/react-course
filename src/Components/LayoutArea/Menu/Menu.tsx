import "./Menu.css";

function Menu(): JSX.Element {
	return (
		<div className="Menu">
			<a href="/home">
				<p>Home</p>
			</a>
			<a href="/products">
				<p>Products</p>
			</a>
			<a href="/about">
				<p>About</p>
			</a>
		</div>
	);
}

export default Menu;
