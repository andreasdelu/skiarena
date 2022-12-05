import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./scss/Main.css";
import "./scss/Pages.css";
import "./scss/Components.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cookies from "./pages/Cookies";
import ScrollToTop from "./components/ScrollToTop";
import Prices from "./pages/Prices";
import Booking from "./pages/Booking";
import Gavekort from "./pages/Gavekort";
import PageLayout from "./layouts/PageLayout";
import IntroKursus from "./pages/kursus/IntroKursus";
import BasisKursus from "./pages/kursus/BasisKursus";
import MiniKursus from "./pages/kursus/MiniKursus";
import FamilieKursus from "./pages/kursus/FamilieKursus";
import DDSKursus from "./pages/kursus/DDSKursus";
import TeknikKursus from "./pages/kursus/TeknikKursus";

import EnkeltLektion from "./pages/lektioner/EnkeltLektion";
import FamilieLektion from "./pages/lektioner/FamilieLektion";
import GruppeLektion from "./pages/lektioner/GruppeLektion";
import PersonligLektion from "./pages/lektioner/PersonligLektion";
import ProeveLektion from "./pages/lektioner/ProeveLektion";
import SnowboardLektion from "./pages/lektioner/SnowboardLektion";
import SnowboardFamilieLektion from "./pages/lektioner/SnowboardFamilieLektion";

import BlaaMandag from "./pages/arrangementer/BlaaMandag";
import FirmaArrangement from "./pages/arrangementer/FirmaArrangement";
import Polterabend from "./pages/arrangementer/Polterabend";

import FAQ from "./pages/om/FAQ";
import FindVej from "./pages/om/FindVej";
import Job from "./pages/om/Job";
import Kontakt from "./pages/om/Kontakt";
import Presse from "./pages/om/Presse";
import Betingelser from "./pages/om/Betingelser";

export default function App() {

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Nav />
			<div id='mainContent'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cookies' element={<Cookies />} />
					<Route path='/priser' element={<Prices />} />
					<Route path='/booking' element={<Booking />} />
					<Route path='/gavekort' element={<Gavekort />} />
					<Route
						path='/kurser/intro'
						element={
							<PageLayout content={<IntroKursus />} title={"Introkursus"} />
						}
					/>
					<Route
						path='/kurser/basis'
						element={
							<PageLayout content={<BasisKursus />} title={"Basiskursus"} />
						}
					/>
					<Route
						path='/kurser/mini'
						element={
							<PageLayout content={<MiniKursus />} title={"Minikursus"} />
						}
					/>
					<Route
						path='/kurser/familie'
						element={
							<PageLayout content={<FamilieKursus />} title={"Familiekursus"} />
						}
					/>
					<Route
						path='/kurser/teknik'
						element={
							<PageLayout content={<TeknikKursus />} title={"Teknikkursus"} />
						}
					/>
					<Route
						path='/kurser/dds'
						element={
							<PageLayout
								content={<DDSKursus />}
								title={"Den Danske Skiskole - Forberedende Kursus"}
							/>
						}
					/>
					<Route
						path='/lektioner/enkelt'
						element={
							<PageLayout content={<EnkeltLektion />} title={"Enkeltlektion"} />
						}
					/>
					<Route
						path='/lektioner/familie'
						element={
							<PageLayout
								content={<FamilieLektion />}
								title={"Familielektion"}
							/>
						}
					/>
					<Route
						path='/lektioner/gruppe'
						element={
							<PageLayout content={<GruppeLektion />} title={"Gruppelektion"} />
						}
					/>
					<Route
						path='/lektioner/personlig'
						element={
							<PageLayout
								content={<PersonligLektion />}
								title={"Personlig Lektion"}
							/>
						}
					/>
					<Route
						path='/lektioner/proeve'
						element={
							<PageLayout content={<ProeveLektion />} title={"Prøvelektion"} />
						}
					/>
					<Route
						path='/lektioner/snowboard'
						element={
							<PageLayout
								content={<SnowboardLektion />}
								title={"Snowboardlektion"}
							/>
						}
					/>
					<Route
						path='/lektioner/snowboard-familie'
						element={
							<PageLayout
								content={<SnowboardFamilieLektion />}
								title={"Snowboard - Familielektion"}
							/>
						}
					/>
					<Route
						path='/arrangementer/blaa-mandag'
						element={
							<PageLayout content={<BlaaMandag />} title={"Blå Mandag"} />
						}
					/>
					<Route
						path='/arrangementer/firma'
						element={
							<PageLayout
								content={<FirmaArrangement />}
								title={"Firma Arrangement"}
							/>
						}
					/>
					<Route
						path='/arrangementer/polterabend'
						element={
							<PageLayout content={<Polterabend />} title={"Polterabend"} />
						}
					/>

					<Route
						path='/faq'
						element={<PageLayout content={<FAQ />} title={"FAQ"} />}
					/>
					<Route
						path='/find-vej'
						element={<PageLayout content={<FindVej />} title={"Find Vej"} />}
					/>
					<Route
						path='/job'
						element={<PageLayout content={<Job />} title={"Job"} />}
					/>
					<Route
						path='/kontakt'
						element={<PageLayout content={<Kontakt />} title={"Kontakt"} />}
					/>
					<Route
						path='/presse'
						element={<PageLayout content={<Presse />} title={"Presse"} />}
					/>
					<Route
						path='/betingelser'
						element={
							<PageLayout
								content={<Betingelser />}
								title={"Betingelser for booking"}
							/>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
