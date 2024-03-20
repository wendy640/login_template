// you can use react icon for password indicator the bullet and tick
import React, { useEffect, useState } from "react";
import regImg from "../../assets/register.svg";
import "./AuthContainer.scss";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
const Register = ({ onLogin, togglePassword, showPassword }) => {
	const [person, setPerson] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [passLetters, setPassLetters] = useState(false);
	const [passNumber, setPassNumber] = useState(false);
	const [passChar, setPassChar] = useState(false);
	const [passSpecialChar, setPassSpecialChar] = useState(false);
	const [passChecked, setPassChecked] = useState(false);

	const [showPasswordStrengthIndicator, setShowPasswordStrengthIndicator] =
		useState();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson({ ...person, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = person;
		setPerson({ name: "", email: "", password: "" });
		console.log(newUser);
	};

	const togglePasswordStrengthIndicator = () => {
		setShowPasswordStrengthIndicator(true);
	};

	useEffect(() => {
		//check for upper and lower case
		const hasUpperCase = /[A-Z]/.test(person.password);
		const hasLowerCase = /[a-z]/.test(person.password);

		if (hasUpperCase && hasLowerCase) {
			setPassLetters(true);
		} else {
			setPassLetters(false);
		}
		//check for number
		if (/\d/.test(person.password)) {
			setPassNumber(true);
		} else {
			setPassNumber(false);
		}
		//check for special character
		if (/[^A-Za-z0-9]/.test(person.password)) {
			setPassSpecialChar(true);
		} else {
			setPassSpecialChar(false);
		}
		//check for password length
		if (person.password.length >= 8) {
			setPassChar(true);
		} else {
			setPassChar(false);
		}
		//to check if all indicators are met
		if (passLetters && passNumber && passSpecialChar && passChar) {
			setPassChecked(true);
		} else {
			setPassChecked(false);
		}
	}, [person.password, passChar, passLetters, passNumber, passSpecialChar]);
	return (
		<div className="main-container --flex-center">
			<div className="img-container">
				<img src={regImg} alt="login" />
			</div>
			<div className="form-container">
				<form onSubmit={handleSubmit} className="--form-control">
					<h2 className="--color-danger --text-center">Register</h2>
					<input
						type="text"
						name="name"
						className="--width-100"
						placeholder="username"
						value={person.name}
						onChange={handleChange}
					/>
					<input
						type="email"
						name="email"
						className="--width-100"
						placeholder="Email"
						value={person.email}
						onChange={handleChange}
					/>
					<div className="username-input-container">
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							className="--width-100"
							placeholder="password"
							value={person.password}
							onChange={handleChange}
							onClick={togglePasswordStrengthIndicator}
						/>
						{showPassword ? (
							<FiEye className="eye-icon" onClick={togglePassword} />
						) : (
							<FiEyeOff className="eye-icon" onClick={togglePassword} />
						)}
					</div>
					<button
						onClick={() => alert(person.password)}
						disabled={!passChecked}
						className={
							passChecked
								? "--btn --btn-primary --btn-block "
								: " --btn --btn-primary --btn-block  btn-disabled"
						}
					>
						Register
					</button>

					<span className=" --text-sm --block">
						Have an account?{" "}
						<a href="#" className="--text-sm" onClick={onLogin}>
							Login
						</a>
					</span>
					{/* passsword strength indicator */}
					<div
						className={
							showPasswordStrengthIndicator
								? "show-indicator"
								: "hide-indicator"
						}
					>
						<ul className="--card --bg-grey --text-sm --p --list-style-none">
							<p className="--text-sm ">Password Strength Indicator</p>
							<li
								className={passLetters ? "--color-success" : "--color-danger"}
							>
								<span className="--align-center">
									{passLetters ? <FaCheck /> : <GoDotFill />}
									&nbsp; Lowercase & Uppercase
								</span>
							</li>
							<li className={passNumber ? "--color-success" : "--color-danger"}>
								<span>
									{passNumber ? <FaCheck /> : <GoDotFill />}
									&nbsp; Number (0-9)
								</span>
							</li>
							<li
								className={
									passSpecialChar ? "--color-success" : "--color-danger"
								}
							>
								<span>
									{passSpecialChar ? <FaCheck /> : <GoDotFill />}
									&nbsp; Special Character (!@#$%^&*)
								</span>
							</li>
							<li className={passChar ? "--color-success" : "--color-danger"}>
								<span>
									{passChar ? <FaCheck /> : <GoDotFill />}
									&nbsp; At least 8 characters
								</span>
							</li>
						</ul>
					</div>
				</form>
			</div>
			{/* <div className="--text-center --py">
        {" "}
        <p>name: {person.name}</p>
        <p>email: {person.email}</p>
        <p>password: {person.password}</p>
      </div> */}
		</div>
	);
};

export default Register;
