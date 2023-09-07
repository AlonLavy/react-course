import { useSelector } from "react-redux";
import "./AuthMenu.css";
import { AppState } from "../../../Redux/AppState";
import { NavLink } from "react-router-dom";
import authService from "../../../Services/AuthService";

function AuthMenu(): JSX.Element {
	const user = useSelector((appState: AppState) => appState.user);
	return (
		<div className="AuthMenu">
			{user ? (
				<>
					{"Hello " + user.firstName}
					<br />
					<NavLink to="/home" onClick={() => authService.logout()}>
						Logout
					</NavLink>
				</>
			) : (
				<>
					{"Hello!"}
					<br />
					<NavLink to="/login">Login</NavLink>
					<br />
					<NavLink to="/register">Register </NavLink>
				</>
			)}
		</div>
	);
}

export default AuthMenu;
