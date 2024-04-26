import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<main>
					<Routes>
						<Route
							path="/"
							element={<div>Hello!</div>}
						/>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	)
}

export default App
