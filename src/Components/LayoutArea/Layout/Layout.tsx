import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.css";

function Layout(): JSX.Element {
	return (
		<div className="Layout">
			<header>
				<Header />
			</header>
			<aside>
				<Menu></Menu>
			</aside>
			<main>3</main>
			<footer>4</footer>
		</div>
	);
}

export default Layout;
