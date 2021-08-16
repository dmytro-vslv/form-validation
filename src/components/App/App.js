import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Form from "../Form/Form";
import "./App.css";

const App = () => {
	const [showForm, setShowForm] = useState(true);
	const [showMessage, setShowMessage] = useState(false);

	return (
		<div className="container">
			<div className="container__content">
				<h2 className="container__title">Learn to code by watching others</h2>
				<p className="container__text">
					See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
					but understanding how developers think is invaluable.
				</p>
			</div>

			<CSSTransition
				in={showForm}
				timeout={300}
				classNames="container__form-"
				unmountOnExit
				onExited={() => setShowMessage(true)}
			>
				<Form setShowForm={setShowForm} />
			</CSSTransition>

			<CSSTransition in={showMessage} timeout={300} classNames="container__message-" mountOnEnter>
				<h3 className="container__message">Form submitted successfully!</h3>
			</CSSTransition>
		</div>
	);
};

export default App;
