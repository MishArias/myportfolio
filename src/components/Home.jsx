import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Mish from "..//assets/mish.jpg"

const Home = () => {
	return (
		<div
			name="home"
			className="container py-20 mx-auto bg-gradient-to-b from-pink-500 to-purple-500 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
					Software Development Technologist!
					</h2>
					<div>
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
						>
							Projects
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowSmRight size={25} className="ml-1" />
							</span>
						</Link>
					</div>
				</div>

				<div>
					<img
						src={Mish}
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 md:w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
