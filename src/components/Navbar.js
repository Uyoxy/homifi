import React, { useState } from "react";
import inside from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
	// State to manage the mobile menu toggle
	const [isOpen, setIsOpen] = useState(false);

	// Toggle the mobile menu
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="flex justify-between items-center p-4 bg-gray-100 shadow-lg">
			{/* Logo */}
			<div className="flex items-center">
				<img src={inside} alt="Logo" className="h-8" />
			</div>

			{/* Hamburger Menu for Mobile */}
			<div className="md:hidden">
				<button
					onClick={toggleMenu}
					className="text-gray-700 focus:outline-none"
				>
					{isOpen ? (
						// Close Icon when the menu is open
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						// Hamburger Icon when the menu is closed
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Links - Displayed in horizontal row on desktop, hidden on mobile */}
			<ul
				className={`${
					isOpen ? "block" : "hidden"
				} absolute md:static left-0 top-20 w-full md:w-auto md:flex space-y-4 md:space-y-0 md:space-x-4 bg-gray-100 md:bg-transparent p-4 md:p-0 z-50`}
			>
				<li className="hover:text-[#0AB566] cursor-pointer text-center md:text-left whitespace-nowrap text-[16px]">
					About Us
				</li>
				<li className="hover:text-[#0AB566] cursor-pointer text-center md:text-left whitespace-nowrap text-[16px]">
					Testimonies
				</li>
				<li className="hover:text-[#0AB566] cursor-pointer text-center md:text-left whitespace-nowrap text-[16px]">
					Contact Us
				</li>

				{/* Sign Up Button */}
				<li className="text-center">
					<Link
						to="/signup"
						className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-[#0AB566] whitespace-nowrap"
					>
						Sign in
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
