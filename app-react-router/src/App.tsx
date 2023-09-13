import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Card from './Pages/Card';
import CardItem from './Pages/CardItem';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/card" element={<Card />} />
					<Route path="/card/:card_id" element={<CardItem />} />

				</Routes>
			</Router>
		</>
	);
}

export default App;
