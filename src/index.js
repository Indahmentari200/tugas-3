/** @format */
import React from "react";
import ReactDOM from "react-dom/client";

function Welcome(props) {
	return <h1>Selamat Datang {props.nama}</h1>;
}

let user = "Mentari";

function App() {
	if (user == null) {
		return <button>Login</button>;
	} else {
		return <Welcome nama={user} />;
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
