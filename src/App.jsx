import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./scss/Main.css";
import "./scss/Pages.css";
import "./scss/Components.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cookies from "./pages/Cookies";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Nav />
			<div id='mainContent'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cookies' element={<Cookies />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
