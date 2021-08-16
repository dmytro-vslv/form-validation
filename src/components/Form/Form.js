import { useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import "./Form.css";

const initialState = { firstName: "", lastName: "", email: "", password: "" };

const Form = ({ setShowForm }) => {
	const [inputs, setInputs] = useState(initialState);
	const [errors, setErrors] = useState({});

	const handleChange = e => {
		setErrors({ ...errors, [e.target.name]: "" });
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const isValid = validateInputs();

		if (isValid) {
			console.log("Form submitted: ", inputs);
			setInputs(initialState);
			setShowForm(false);
		}
	};

	const validateInputs = () => {
		const errors = {};

		if (!inputs.firstName.trim()) {
			errors.firstName = "First Name cannot be empty";
		}

		if (!inputs.lastName.trim()) {
			errors.lastName = "Last Name cannot be empty";
		}

		if (!inputs.email.trim()) {
			errors.email = "Email cannot be empty";
		} else if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
			errors.email = "Looks like this is not an email";
		}

		if (!inputs.password.trim()) {
			errors.password = "Password cannot be empty";
		} else if (inputs.password.trim().length < 6) {
			errors.password = "Passwords should be at least 6 characters";
		}

		if (Object.values(errors).length) {
			setErrors(errors);
			return false;
		}

		return true;
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<legend className="form__legend">
				<span className="form__legend--bold">Try it free 7 days </span>
				then $20/mo. thereafter
			</legend>

			<InputGroup
				type="text"
				placeholder="First Name"
				name="firstName"
				onChange={handleChange}
				value={inputs.firstName}
				error={errors.firstName}
			/>

			<InputGroup
				type="text"
				placeholder="Last Name"
				name="lastName"
				onChange={handleChange}
				value={inputs.lastName}
				error={errors.lastName}
			/>

			<InputGroup
				type="email"
				placeholder="Email Address"
				name="email"
				onChange={handleChange}
				value={inputs.email}
				error={errors.email}
			/>

			<InputGroup
				type="password"
				placeholder="Password"
				name="password"
				onChange={handleChange}
				value={inputs.password}
				error={errors.password}
			/>

			<button className="form__submit" type="submit">
				CLAIM YOUR FREE TRIAL
			</button>

			<p className="form__agreement">
				By clicking the button, you are agreeing to our
				<span className="form__agreement--highlighted"> Terms and Services</span>
			</p>
		</form>
	);
};

export default Form;
