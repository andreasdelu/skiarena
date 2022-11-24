import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./scss/Main.css";
import "./scss/Pages.css";
import "./scss/Components.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
