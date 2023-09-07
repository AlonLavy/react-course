import { useForm } from "react-hook-form";
import "./Login.css";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";

function Login(): JSX.Element {
	const { register, handleSubmit, formState } = useForm<UserModel>();
	const navigator = useNavigate();
	const send = async (credentials: CredentialsModel) => {
		try {
			await authService.login(credentials);
			alert("Welcome back!");
			navigator("/home");
		} catch (error: any) {
			console.log(error.message);
		}
	};
	return (
		<div className="Login">
			<form onSubmit={handleSubmit(send)}>
				<h2>Login</h2>

				<label>Email: </label>
				<input type="email" {...register("email")} />
				<label>Password: </label>
				<input
					type="password"
					{...register("password", UserModel.passwordValidation)}
				/>

				<button>Submit</button>

				<span>{formState.errors?.password?.message}</span>
			</form>
		</div>
	);
}

export default Login;
