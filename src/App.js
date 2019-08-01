import React from "react";
import "./App.css";

function App() {
	const authFunc = () => {
		const authData = { data: "Auth on my site" };
		const WavesKeeper = window.WavesKeeper;
		if (WavesKeeper) {
			WavesKeeper.auth(authData)
				.then(auth => {
					console.log(auth); //displaying the result on the console
					/*...processing data */
				})
				.catch(error => {
					console.error(error); // displaying the result on the console
					/*...processing errors */
				});
		} else {
			alert("To Auth WavesKeeper should be installed.");
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				Hello Web3 World!
				<br />
				<br />
				<button type="submit" value="Auth" onClick={authFunc}>
					Test WavesKeeper Auth
				</button>
			</header>
		</div>
	);
}

export default App;
