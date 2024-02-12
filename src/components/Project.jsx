import React from "react";
import Banner2 from "..//assets/banner2.png";
import cookitGif from "../assets/Cookit.gif";
import Homebackground from "..//assets/homebackground.png";

const Projects = () => {
	const projects = [
		{
			id: 1,
			gif: Homebackground,
			title: "Fashion Store",
			description: (
				<div>
					<p>
						This website is developed based on HTML and CSS, to
						satisfy the need of the potential client who needs a
						presence on the web and wants to sell their items
						online, to which users from all over the world can have
						access and make your purchase. It is a dynamic,
						client-friendly website, its structure is well
						detailed, so that it is easy to navigate the page and
						obtain the desired information and/or product. It has a
						plain, but aesthetically striking, structure to capture
						the customer's attention just by entering the site's
						landing page.
					</p>
					<div className="border-t-2 border-gray-500 mt-4 pt-4">
						<p className="text-lg font-bold">Technologies Used:</p>
						<ul className="list-disc pl-6">
							<li>Html</li>
							<li>CSS</li>
							<li>SublimeText</li>
							<li>Font Awesome</li>
						</ul>
					</div>
					{/* <div className="mt-4">
						<a
							href="https://gitlab.com/wilcoding/auto-hub"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 font-bold hover:underline"
						>
							Source Code
						</a>
					</div> */}
				</div>
			),
		},
		{
			id: 2,
			gif: Banner2,
			title: "IceCream store",
			description: (
				<div>
					<p>
						The ice cream store website is developed using HTML and
						CSS, catering to the requirement of establishing an
						online presence for the business and facilitating the
						sale of ice cream products to a global audience. The
						website aims to provide a dynamic and user-friendly
						experience, with a detailed structure for easy
						navigation and access to desired information and
						products.
					</p>
					<div className="border-t-2 border-gray-500 mt-4 pt-4">
						<p className="text-lg font-bold">Technologies Used:</p>
						<ul className="list-disc pl-6">
							<li>HTML</li>
							<li>CSS</li>
							<li>SublimeText</li>
							<li>Font Awesome</li>
						</ul>
					</div>
					{/* <div className="mt-4">
						<a
							href="https://gitlab.com/wilcoding/Cookit"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 font-bold hover:underline"
						>
							Source Code
						</a>
					</div> */}
				</div>
			),
		},
	];

	return (
		<div name="projects" className="container py-12 mx-auto text-gray-800">
			<div className="max-w-3xl mx-auto">
				<div>
					<p className="text-3xl font-bold border-b-4 border-pink-500 mb-6">
						Projects
					</p>
					<p className="text-xl py-6 font-bold" >These are some of my projects.</p>
				</div>

				<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
					{projects.map(({ id, gif, title, description }) => (
						<div
							key={id}
							className="shadow-md hover:scale-105 duration-500 rounded-lg"
						>
							<img
								src={gif}
								alt={title}
								className="w-full rounded-t-lg"
							/>
							<div className="p-4">
								<p className="text-xl font-bold mb-2">
									{title}
								</p>
								<p className="text-sm md:text-base">
									{description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
