import React from 'react'
import logImg  from '../../assets/login.svg'
const Login = ({ onRegister, onReset }) => {
	return (
		<div className="main-container --flex-center">
			<div className="img-container">
				<img src={logImg} alt="login" />
			</div>
			<div className="form-container">
				<form className="--form-control">
					<h2 className="--color-danger --text-center">Login</h2>
					<input type="text" className="--width-100" placeholder="username" />
					<input
						type="password"
						className="--width-100"
						placeholder="password"
					/>
					<button className="--btn --btn-primary --btn-block">Login</button>
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

export default Login
