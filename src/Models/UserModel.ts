import { RegisterOptions } from "react-hook-form";

class UserModel {
	public id: number;
	public firstName: string;
	public lastName: string;
	public email: string;
	public password: string;
	public role: string;

	public static nameValidation: RegisterOptions<UserModel> = {
		min: { value: 2, message: "Name too short" },
		max: { value: 15, message: "Name too long" },
		required: { value: true, message: "Must enter name" },
	};

	public static passwordValidation: RegisterOptions<UserModel> = {
		min: { value: 8, message: "Password too short" },
		max: { value: 100, message: "Password too long" },
		required: { value: true, message: "Password not entered" },
	};
}

export default UserModel;
