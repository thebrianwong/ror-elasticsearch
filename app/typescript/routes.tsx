import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default (
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
);
