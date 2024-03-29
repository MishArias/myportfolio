import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "experience",
		},
		{
			id: 4,
			link: "projects",
		},
		{
			id: 5,
			link: "skills",
		},
		{
			id: 6,
			link: "contact",
		},
	];
	return (
		<div className="flex justify-between items-center w-full h-20 text-white bg-gradient-to-b from-pink-500 to-purple-500 fixed shadow-lg">
			<div>
				<h1 className="text-4xl font-bold ml-4">Wilmeris Michel Arias</h1>
			</div>

			<ul className="hidden md:flex">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className="px-4 cursor-pointer font-semibold text-gray-200 hover:text-white transition duration-300"
					>
						<Link to={link} smooth={500}>
							{link}
						</Link>
					</li>
				))}
			</ul>

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-pink-500 to-purple-500 text-gray-200 md:hidden">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer py-6 text-xl"
						>
							<Link
								onClick={() => setNav(!nav)}
								to={link}
								smooth={500}
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NavBar;
