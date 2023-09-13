import React from "react";
import { Link } from "react-router-dom";

function Card() {
	return (
		<>
			<h1> this is Card </h1>
			<Link to="/">go to home</Link>

			<ul>
				<li>clique <Link to="/card/1">aqui</Link> para ir para o card 1</li>
				<li>clique <Link to="/card/2">aqui</Link> para ir para o card 2</li>
				<li>clique <Link to="/card/3">aqui</Link> para ir para o card 3</li>
				<li>clique <Link to="/card/4">aqui</Link> para ir para o card 4</li>
				<li>clique <Link to="/card/5">aqui</Link> para ir para o card 5</li>
				<li>clique <Link to="/card/6">aqui</Link> para ir para o card 6</li>
				<li>clique <Link to="/card/7">aqui</Link> para ir para o card 7</li>
			</ul>
		</>
	);
}

export default Card;
