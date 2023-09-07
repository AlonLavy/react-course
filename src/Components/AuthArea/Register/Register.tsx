import { useForm } from "react-hook-form";
import "./Register.css";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";

function Register(): JSX.Element {
	const { register, handleSubmit, formState } = useForm<UserModel>();
	const navigator = useNavigate();
	const send = async (user: UserModel) => {
		try {
			await authService.register(user);
			alert("Welcome!");
			navigator("/home");
		} catch {
			console.log("error");
		}
	};
	return (
		<div className="Register">
			<form onSubmit={handleSubmit(send)}>
				<h2>Register</h2>

				<label>First Name: </label>
				<input
					type="text"
					{...register("firstName", UserModel.nameValidation)}
				/>
				<label>Last Name: </label>
				<input
					type="text"
					{...register("lastName", UserModel.nameValidation)}
				/>
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

export default Register;
