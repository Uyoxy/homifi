import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "./components/Dashboard";
import TransactionHistory from "./components/TransactionHistory";
import Profile from "./components/DashboardStats";
import Settings from "./components/Settings";
import BuyTokens from "./components/BuyTokens";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/buytokens" element={<BuyTokens />} />

				<Route path="/dashboard" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="tokens" element={<TransactionHistory />} />
					<Route path="profile" element={<Profile />} />
					<Route path="settings" element={<Settings />} />

					{/* Add more nested routes as needed */}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
