import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Houses from "./Houses";
import Team from "./Team";
import Footer from "./Footer";
import agent from "../../src/assets/images/Become an agent.svg";
import secondhome from "../../src/assets/images/secondhome.svg";

const LandingPage = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [
		require("../assets/images/grp.svg"),
		require("../assets/images/grp.svg"),
		require("../assets/images/rec2.svg"),
		require("../assets/images/rec3.svg"),
	];
	const [currentSlide, setCurrentSlide] = useState(0);

	const testimonials = [
		{
			name: "River Craft",
			twitterHandle: "@thewonderkid",
			tweet: "We build entrepreneurs in our community, our programmes to programs and resources help them grow their businesses for positive social impact.",
			views: "130k",
			date: "06 May 23",
		},
		{
			name: "River Craft",
			twitterHandle: "@thewonderkid",
			tweet: "We build entrepreneurs in our community, our programmes to programs and resources help them grow their businesses for positive social impact.",
			views: "130k",
			date: "06 May 23",
		},
		{
			name: "River Craft",
			twitterHandle: "@thewonderkid",
			tweet: "We build entrepreneurs in our community, our programmes to programs and resources help them grow their businesses for positive social impact.",
			views: "130k",
			date: "06 May 23",
		},
		{
			name: "River Craft",
			twitterHandle: "@thewonderkid",
			tweet: "We build entrepreneurs in our community, our programmes to programs and resources help them grow their businesses for positive social impact.",
			views: "130k",
			date: "06 May 23",
		},
		{
			name: "River Craft",
			twitterHandle: "@thewonderkid",
			tweet: "We build entrepreneurs in our community, our programmes to programs and resources help them grow their businesses for positive social impact.",
			views: "130k",
			date: "06 May 23",
		},
		{
			name: "River Craft",
			twitterHandle: "@thewonderkid",
			tweet: "We build entrepreneurs in our community, our programmes to programs and resources help them grow their businesses for positive social impact.",
			views: "130k",
			date: "06 May 23",
		},
		{
			name: "River Craft",
			twitterHandle: "@thewonderkid",
			tweet: "We build entrepreneurs in our community, our programmes to programs and resources help them grow their businesses for positive social impact.",
			views: "130k",
			date: "06 May 23",
		},
		{
			name: "River Craft",
			twitterHandle: "@thewonderkid",
			tweet: "We build entrepreneurs in our community, our programmes to programs and resources help them grow their businesses for positive social impact.",
			views: "130k",
			date: "06 May 23",
		},
		{
			name: "River Craft",
			twitterHandle: "@thewonderkid",
			tweet: "We build entrepreneurs in our community, our programmes to programs and resources help them grow their businesses for positive social impact.",
			views: "130k",
			date: "06 May 23",
		},
		// Add more testimonials here if needed
	];
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) =>
				prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
			);
		}, 5000); // Slide every 5 seconds

		return () => clearInterval(interval);
	}, [testimonials.length]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % images.length
			);
		}, 5000);
		return () => clearInterval(intervalId);
	}, [images.length]);

	return (
		<div className="flex flex-col lg:flex-col min-h-screen bg-white">
			{/* First Section */}
			<div className="flex flex-row lg:flex-row h-[100vh] bg-white">
				<div className="lg:w-1/2 w-full relative">
					<img
						src={require("../assets/images/hhh.svg").default}
						alt="Home"
						className="w-full h-full object-cover hidden md:block"
						data-aos="fade-right"
					/>
				</div>

				<div className="lg:w-1/2 w-full flex flex-col  p-2 md:p-6">
					<Navbar />
					<div className="mb-8 mt-20">
						<button
							className="text-[#0AB566] border border-[#0AB566] rounded-full px-4 py-2 whitespace-nowrap"
							data-aos="zoom-in"
						>
							Find Your Dream Home with Homifi
						</button>
					</div>

					<h1
						className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
						data-aos="fade-up"
					>
						LOOKING FOR YOUR,
						<span className="text-[#0AB566]">PERFECT HOME?</span>
					</h1>

					<p
						className="text-lg text-[[#0AB566]] mb-8"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						Your Partner in Finding Your Dream Home. Get the Perfect
						House You Want, Where You Want It, Immediately.
					</p>

					<div
						className="flex gap-4"
						data-aos="fade-up"
						data-aos-delay="600"
					>
						<button className="bg-[#0AB566] text-white rounded-[8px] px-6 py-3">
							Create Order
						</button>
						<button className="border bg-[#E7F8F0CC] border-[#0AB566] text-[#0AB566] rounded-[8px] px-6 py-3">
							Become An Agent
						</button>
					</div>
				</div>
			</div>
			<div>
				<img
					src={secondhome}
					alt="Home"
					className="w-full h-full object-cover md:hidden"
					data-aos="fade-right"
				/>
			</div>
			{/* Second Section */}
			<div className="bg-gray-100 py-12 px-8 lg:px-16 w-full">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-row lg:flex-row justify-between h-[40vh]">
						<div>
							<h2
								className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
								data-aos="fade-up"
							>
								What We Do
							</h2>
							<p
								className="text-lg text-gray-600 mb-12"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								Lorem ipsum dolor sit amet,elit.<br></br>Lorem
								ipsum dolor sit amet, consectetur adipiscing
								elit.<br></br>Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
							</p>
						</div>
						<div className="mt-12 text-center">
							<button
								className="bg-[#0AB566] text-white rounded-[8px] px-6 py-3"
								data-aos="fade-up"
								data-aos-delay="600"
							>
								Create Order
							</button>
						</div>
					</div>
					<div
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
						data-aos="fade-up"
						data-aos-delay="400"
					>
						<div className="bg-white p-6 shadow-lg rounded-lg text-center">
							<img
								src={
									require("../assets/images/left.svg").default
								}
								alt="Rent properties icon"
								className="w-16 h-16 mx-auto mb-4"
							/>
							<h3 className="text-xl font-semibold text-blue-600 mb-2">
								Rent properties
							</h3>
							<p className="text-gray-600">
								Lorem ipsum dolor sit amet.
							</p>
						</div>

						<div className="bg-white p-10 shadow-lg rounded-lg text-center">
							<img
								src={
									require("../assets/images/right.svg")
										.default
								}
								alt="Buy properties icon"
								className="w-16 h-16 mx-auto mb-4"
							/>
							<h3 className="text-xl font-semibold text-blue-600 mb-2">
								Buy properties
							</h3>
							<p className="text-gray-600">
								Lorem ipsum dolor sit amet.
							</p>
						</div>

						<div className="bg-white p-6 shadow-lg rounded-lg text-center">
							<img
								src={
									require("../assets/images/right.svg")
										.default
								}
								alt="Sell properties icon"
								className="w-16 h-16 mx-auto mb-4"
							/>
							<h3 className="text-xl font-semibold text-blue-600 mb-2">
								Sell properties
							</h3>
							<p className="text-gray-600">
								Lorem ipsum dolor sit amet.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Third Section: Become an Agent */}
			<div className="flex items-center justify-center bg-blue-600 text-white relative py-12 px-8">
				<div className="absolute inset-0 opacity-40">
					<img
						src=""
						alt="Agent Background"
						className="w-full h-full object-cover transition-opacity duration-1000"
					/>
				</div>

				<div className=" flex flex-col md:flex-row relative z-10 max-w-xl text-center mx-auto items-center gap-4 md:gap-10">
					<div className="md:w-[500px] lg:w-[650px] w-[330px]">
						<img src={agent} alt="" />
					</div>
					<div>
						<h2 className="text-4xl font-bold mb-4">
							BECOME AN AGENT.
						</h2>
						<p className="mb-6">
							When it comes to selling or renting out your
							property, time is of the essence.
						</p>
						<button className="bg-green-600 text-white rounded- px-6 py-3">
							Become An Agent
						</button>
					</div>
				</div>
			</div>
			{/* fourth section */}
			<section class="bg-[#F0FBF666] py-12 h-screen">
				<div class="container mx-auto text-center">
					<div className="bg-gray-50 py-12">
						<h2 className="text-4xl font-bold text-center mb-8">
							What People Are Saying About Us
						</h2>
						<p className="text-center text-gray-600 mb-12">
							See tweets from our clients that got us in our
							feelings
						</p>

						{/* Slider Container */}
						<div className="relative overflow-hidden">
							<div
								className="flex transition-transform ease-in-out duration-500"
								style={{
									transform: `translateX(-${
										currentSlide * 100
									}%)`,
								}}
							>
								{testimonials.map((testimonial, index) => (
									<div
										key={index}
										className="flex-shrink-0 w-full md:w-1/3 px-4"
									>
										<div className="bg-white p-6 shadow-md rounded-lg">
											<div className="flex justify-between items-center mb-4">
												<p className="text-sm">
													Thread
												</p>
												<svg
													className="w-6 h-6 text-blue-500"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M12 19l-7-7 7-7m8 0l-7 7 7 7"
													/>
												</svg>
											</div>
											<p className="text-gray-800 mb-4">
												{testimonial.tweet}
											</p>
											<div className="text-sm text-gray-500">
												<p>
													{testimonial.date} ·{" "}
													{testimonial.views} Views
												</p>
											</div>
											<div className="flex items-center mt-4">
												<img
													src="https://via.placeholder.com/40"
													alt={testimonial.name}
													className="w-10 h-10 rounded-full"
												/>
												<div className="ml-3">
													<p className="font-bold">
														{testimonial.name}
													</p>
													<p className="text-sm text-gray-500">
														{
															testimonial.twitterHandle
														}
													</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Houses />
			<Team />
			<Footer />
		</div>
	);
};

export default LandingPage;
