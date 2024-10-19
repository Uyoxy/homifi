import React from "react";
import teammember from "../../src/assets/images/grp.svg";

export default function Team() {
	return (
		<div className="md:h-[1200px] h-full my-8 w-full px-2 flex items-center mx-auto">
			<div className="w-full">
				<div className="flex flex-col text-right md:mb-32 mx-auto">
					<h1 className="text-[#1A1A1A] text-[20px] md:leading-[66px] font-[700] md:text-[44px] mb-4 text-center md:text-right">
						Meet The Team
					</h1>
					<p className="md:text-[24px] text-[16px] text-[#5B5B5B] text-center md:text-right">
						Get to know the people behind the driving force behind
						our success.
					</p>
				</div>
				<div className="flex flex-col gap-32 lg:flex-row mx-auto">
					<div className="flex flex-row justify-between gap-5 md:w-[350px] md:h-[310px] border-l-[#1E47A3] border-l-[3px] px-10 mx-auto">
						<div className="flex flex-col gap-10 justify-between">
							<div>
								<p className="text-[#080808]">01</p>
							</div>
							<div>
								<p className="text-[#080808]">Samson</p>
								<p className="text-[#080808]">Okolinta</p>
							</div>
							<div>
								<p className="text-[#666666]">Co-founder/CEO</p>
							</div>
						</div>
						<img
							src={teammember}
							alt="member"
							className="w-[150px] md:w-[260px]"
						/>
					</div>

					<div className="border-r-[#8080804D] border-l-[#8080804D] hidden md:block">
						<div className="flex flex-col justify-between gap-5 w-[300px] h-[310px] border-l-[#8080804D] border-l-[1px] md:px-10 mx-auto">
							<p className="text-[#ADADAD]">02</p>
							<div>
								<p className="text-[#ADADAD]">Oraeki</p>
								<p className="text-[#ADADAD]">Francis</p>
							</div>
						</div>
					</div>
					<div className="border-r-[#8080804D] border-l-[#8080804D] hidden md:block">
						<div className="flex flex-col justify-between md:gap-5 md:w-[300px] md:h-[310px] border-l-[#8080804D] border-r-[#8080804D] border-r-[1px] border-l-[1px] md:px-10 mx-auto">
							<p className="text-[#ADADAD]">03</p>
							<div>
								<p className="text-[#ADADAD]">Oraeki</p>
								<p className="text-[#ADADAD]">Francis</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
