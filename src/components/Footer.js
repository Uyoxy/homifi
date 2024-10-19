import React from "react";
import homifi from "../../src/assets/images/HOMIFI..svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="bg-[#212121] relative w-full">
			<div className="bg-[#212121]  bottom-0 left-0 w-full">
				<div className="flex flex-col justify-center items-center gap-5 w-full md:h-[583.5px] md:px-32 px-2 py-6">
					<img
						src={homifi}
						alt="homifi"
						className="mb-10"
						// width="113px"
						// height="113px"
					/>
					<p className="text-[#ADADAD] text-[18px] text-center">
						Your Partner in Finding Your Dream Home. Get the Perfect
						House
						<p className="text-[#ADADAD] text-[18px] text-center">
							You Want, Where You Want It, Immediately.
						</p>
					</p>
					<p className="text-[#FFFFFF]">Follow Us On:</p>
					<div className="flex gap-5 mb-16">
						<div className="rounded-full bg-[#111111] px-1 py-1 relative z-10">
							<FaFacebook className="z-1 text-white" />
						</div>
						<div className="rounded-full bg-[#111111] px-1 py-1">
							<IoLogoWhatsapp className="text-white" />
						</div>
						<div className="rounded-full bg-[#111111] px-1 py-1">
							<LuTwitter className="text-white" />
						</div>
						<div className="rounded-full bg-[#111111] px-1 py-1">
							<FaInstagram className="text-white" />
						</div>
					</div>
					<div className="flex justify-center items-center">
						<ul className="flex flex-row gap-5">
							<li className="text-[#FFFFFF]">About Us</li>
							<li className="text-[#FFFFFF]">Testimonials</li>
							<li className="text-[#FFFFFF]">Contact Us</li>
						</ul>
					</div>
					<div className="bg-[#1E47A3] border-[#1E47A3] mt-3 mb-3 border-[0.5px] w-full"></div>
					<p className="text-[#ffffff]">
						&copy; 2021 MMT. All Rights Reserved
					</p>
				</div>
			</div>
		</div>
	);
}
