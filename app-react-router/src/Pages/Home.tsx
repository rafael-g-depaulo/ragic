import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<h1> this is home </h1>
			<Link to="/card">ver os cards</Link>
		</>
	);
}

export default Home;
