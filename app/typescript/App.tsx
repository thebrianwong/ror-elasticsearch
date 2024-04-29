import HomePage from "./pages/HomePage";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="*"
					element={<Navigate to="/" />}
				/>
			</Routes>
		</BrowserRouter>
	)
};

export default App;
