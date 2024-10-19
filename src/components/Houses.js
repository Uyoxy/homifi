import img from "../../src/assets/images/material-symbols_arrow-outward.svg";
import image from "../../src/assets/images/My project (19) 1.svg";
import imge from "../../src/assets/images/My project (20) 1.svg";

export default function Houses() {
	return (
		<div className="md:px-10 md:py-10 px-2 py-2 w-full">
			<div className="bg-white">
				<p className="md:hidden text-[32px] text-[#0AB566] text-center">
					Coming Soon
				</p>
				<div className="flex gap-8 flex-col md:flex-row">
					<div className="bg-[#0AB5660F] md:w-[50%]  md:h-[1420px] md:rounded-se-[150px] rounded-xl">
						<div className="py-6 md:px-0 px-4 flex flex-col-reverse md:flex-col  md:mt-28">
							<div className="">
								<div className="hidden md:block text-[#0AB566] md:w-[197px] md:h-[54.6px] bg-white rounded-r-[30px] text-center items-center py-4 px-4 border-[1px] border-[#0AB566]">
									Coming soon
								</div>
								<div className="flex items-center justify-center md:gap-20 lg:px-5">
									<p className="justify-start md:justify-center md:text-[40px]">
										Blog Post
									</p>
									<img src={img} alt="" />
								</div>

								<p className="lg:w-[450px] md:px-3 md:w-[300px] text-[#282828] lg:text-[20px] text-[16px] flex mx-auto md:mt-6">
									Stay up-to-date with the latest news and
									trends. We arent on dedicated to keeping you
									informed about the latest develop in
									developments in therefor housing market.
									From new construction projects to trends in
									home decorof we'll provide you with the of
									information you need to make informed if
									offer decisions about your housing options.
									From new construction projects took trends
									in home decor, we'll provide you with the of
									information you need to
								</p>
							</div>
							<div className="flex mt-20">
								<img src={image} alt="" />
							</div>
						</div>
					</div>
					<div className="bg-[#2A51A80D] md:w-[50%] md:h-[1420px] md:rounded-ss-[150px] rounded-xl md:mt-72">
						<div className="py-6 md:px-0 px-4 flex flex-col-reverse md:flex-col">
							<div>
								<div className="flex flex-row justify-end md:mt-20">
									<div className="hidden md:flex text-[#0AB566] md:w-[197px] md:h-[54.6px] bg-white rounded-l-[30px] text-center items-right justify-end py-4 px-4 border-[1px] border-[#0AB566] relative right-0">
										Coming soon
									</div>
								</div>
								<div className="flex items-center justify-center md:gap-20 px-5">
									<p className="justify-start md:justify-center md:text-[40px]">
										Tokenised Real-estate
									</p>
									<img src={img} alt="" />
								</div>

								<p className="lg:w-[450px] md:w-[300px]  lg:px-3 text-[#282828] lg:text-[20px] text-[16px] flex mx-auto">
									Stay up-to-date with the latest news and
									trends. We arent on dedicated to keeping you
									informed about the latest develop in
									developments in therefor housing market.
									From new construction projects to trends in
									home decorof we'll provide you with the of
									information you need to make informed if
									offer decisions about your housing options.
									From new construction projects took trends
									in home decor, we'll provide you with the of
									information you need to
								</p>
							</div>
							<div className="flex mt-20">
								<img src={imge} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
