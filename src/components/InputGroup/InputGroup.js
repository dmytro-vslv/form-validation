import iconError from "../../images/icon-error.svg";
import "./InputGroup.css";

const InputGroup = ({ type, placeholder, name, value, onChange, error }) => {
	return (
		<div className={`input-group ${error ? "input-group--error" : ""}`}>
			<input
				className="input-group__input"
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
			/>

			{error && <img className="input-group__icon" src={iconError} alt="Error" />}

			{error && <p className="input-group__error">{error}</p>}
		</div>
	);
};

export default InputGroup;
