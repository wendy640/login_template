import React, { useState } from "react";
import logImg from "../../assets/login.svg";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
const Login = ({ onRegister, onReset, togglePassword, showPassword }) => {
	const [userLogin, setUserLogin] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserLogin({ ...userLogin, [name]: value });
		// console.log("clicked", userLogin.username);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setUserLogin({
			username: "",
			password: "",
		});
	};

	return (
		<div className="main-container --flex-center">
			<div className="img-container">
				<img src={logImg} alt="login" />
			</div>
			<div className="form-container">
				<form onSubmit={handleSubmit} className="--form-control">
					<h2 className="--color-danger --text-center">Login</h2>
					<input
						type="text"
						className="--width-100"
						placeholder="username"
						name="username"
						onChange={handleChange}
					/>
					<div className="username-input-container">
						<input
							type={showPassword ? "text" : "password"}
							className="--width-100"
							placeholder="password"
							name="password"
							onChange={handleChange}
						/>
						{showPassword ? (
							<FiEye className="eye-icon" onClick={togglePassword} />
						) : (
							<FiEyeOff className="eye-icon" onClick={togglePassword} />
						)}
					</div>
					<button className=" --btn --btn-primary --btn-block">Login</button>
					<a href="#" className="--text-sm" onClick={onReset}>
						Forgot Password
					</a>
					<span className=" --text-sm --block">
						Don't have an account?{" "}
						<a href="#" className="--text-sm " onClick={onRegister}>
							Register
						</a>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Login;
