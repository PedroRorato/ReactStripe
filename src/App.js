import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Checkout from './views/Checkout';

import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route index element={<Checkout />} />
					<Route path='success' element={<h1>Success</h1>} />
					<Route path='cancel' element={<h1>Cancel</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
