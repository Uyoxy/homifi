import React, { useState } from "react";
import Navbars from "./Navbars";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	const [isSidebarVisible, setSidebarVisible] = useState(false);

	const toggleSidebar = () => {
		setSidebarVisible((prev) => !prev);
	};

	return (
		<div className="flex h-screen">
			<Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />
			<div className="flex-1 flex flex-col lg:ml-[260px] md:ml-0">
				<Navbars onToggleSidebar={toggleSidebar} />
				<div className="p-2 md:p-6">
					<Outlet /> {/* Render the child routes here */}
				</div>
			</div>
		</div>
	);
};

export default Layout;
