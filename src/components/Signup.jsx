import React, { useState } from "react";
import hhh from "../../src/assets/images/hhh.svg";
import inside from "../../src/assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
	const [fullName, setFullName] = useState("");
	const [address, setAddress] = useState("");
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	// Validate inputs
	const validate = () => {
		let errors = {};
		if (!fullName) errors.fullName = "Full Name is required.";
		if (!address) errors.address = "Residential Address is required.";
		return errors;
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		setErrors(validationErrors);

		// If no errors, proceed to dashboard
		if (Object.keys(validationErrors).length === 0) {
			navigate("/dashboard");
		}
	};

	return (
		<div className="min-h-screen flex flex-col lg:flex-row">
			{/* Left Section - Form */}
			<div className="lg:w-1/2 w-full flex justify-center items-center bg-white py-10 px-5 lg:px-20">
				<div className="w-full max-w-md">
					{/* Logo */}
					<div className="justify-center mb-6">
						<img src={inside} alt="logo" className="h-12" />
					</div>
					{/* Title */}
					<h1 className="text-center text-2xl lg:text-3xl font-semibold text-blue-800 mb-2">
						Sign IN As A Homifi User
					</h1>
					{/* Subtitle */}
					<p className="text-center text-gray-600 mb-6">
						Sign in to buy, sell or rent high quality properties on
						Homifi today.
					</p>
					{/* Form */}
					<form className="space-y-4" onSubmit={handleSubmit}>
						{/* Full Name Input */}
						<div>
							<input
								type="text"
								placeholder="Full Name"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								className={`w-full p-3 border ${
									errors.fullName
										? "border-red-500"
										: "border-gray-300"
								} rounded-lg`}
							/>
							{errors.fullName && (
								<p className="text-red-500 text-sm mt-1">
									{errors.fullName}
								</p>
							)}
						</div>
						{/* Address Input */}
						<div>
							<input
								type="text"
								placeholder="password"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								className={`w-full p-3 border ${
									errors.address
										? "border-red-500"
										: "border-gray-300"
								} rounded-lg`}
							/>
							{errors.address && (
								<p className="text-red-500 text-sm mt-1">
									{errors.address}
								</p>
							)}
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="block text-center w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
						>
							Sign in
						</button>
					</form>
					{/* Sign In Link */}
					<p className="text-center text-gray-600 mt-4">
						Don't have an account?{" "}
						<a href="/login" className="text-green-500">
							Sign up
						</a>
					</p>
				</div>
			</div>

			{/* Right Section - Image */}
			<div className="lg:w-1/2 w-full flex items-center justify-center">
				<img
					src={hhh}
					alt="Building"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
