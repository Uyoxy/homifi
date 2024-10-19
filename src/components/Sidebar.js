import React from "react";
import {
	AiFillHome,
	AiFillProfile,
	AiOutlineSetting,
	AiOutlineCreditCard,
	AiOutlineClose,
} from "react-icons/ai";
import { useLocation, Link } from "react-router-dom";

const Sidebar = ({ isVisible, onClose }) => {
	const location = useLocation();

	// Determine the active page based on the current location
	const activePage = location.pathname.split("/").pop() || "overview";

	return (
		<aside
			className={`fixed bg-blue-800 text-white w-64 min-h-screen p-6 transition-transform transform ${
				isVisible ? "translate-x-0" : "-translate-x-full"
			} lg:translate-x-0 z-50`}
		>
			<div className="flex items-center justify-between mb-10">
				<div className="flex items-center">
					<AiFillHome size={30} />
					<h1 className="ml-4 text-2xl">Dashboard</h1>
				</div>
				<button onClick={onClose} className="text-white lg:hidden">
					<AiOutlineClose size={24} />
				</button>
			</div>
			<ul className="space-y-6">
				<li>
					<Link to="/dashboard">
						<button
							className={`flex items-center space-x-4 cursor-pointer ${
								activePage === "dashboard" ? "bg-blue-600" : ""
							} w-full text-left p-2 rounded hover:bg-blue-600 transition`}
						>
							<AiFillHome />
							<span>Overview</span>
						</button>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/tokens">
						<button
							className={`flex items-center space-x-4 cursor-pointer ${
								activePage === "tokens" ? "bg-blue-600" : ""
							} w-full text-left p-2 rounded hover:bg-blue-600 transition`}
						>
							<AiOutlineCreditCard />
							<span>Tokens</span>
						</button>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/profile">
						<button
							className={`flex items-center space-x-4 cursor-pointer ${
								activePage === "profile" ? "bg-blue-600" : ""
							} w-full text-left p-2 rounded hover:bg-blue-600 transition`}
						>
							<AiFillProfile />
							<span>Profile</span>
						</button>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/settings">
						<button
							className={`flex items-center space-x-4 cursor-pointer ${
								activePage === "settings" ? "bg-blue-600" : ""
							} w-full text-left p-2 rounded hover:bg-blue-600 transition`}
						>
							<AiOutlineSetting />
							<span>Settings</span>
						</button>
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
