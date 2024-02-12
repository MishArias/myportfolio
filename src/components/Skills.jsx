import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import Net from "../assets/Net.png";
import MySQL from "../assets/MySQL.png";
import Angular from "../assets/Angular.png";
import tailwind from "../assets/tailwind.png";
import reactimage from "../assets/reactimage.png";
import Wordpress from "../assets/Wordpress.png";
import GitHub from "../assets/GitHub.png";


const Skills = () => {
	const techs = [
		{
			id: 1,
			src: html,
			title: "HTML",
			style: "shadow-orange-500",
		},
		{
			id: 2,
			src: css,
			title: "CSS",
			style: "shadow-blue-500",
		},
		{
			id: 3,
			src: javascript,
			title: "JavaScript",
			style: "shadow-yellow-500",
		},
		{
			id: 4,
			src: Wordpress,
			title: "Wordpress",
			style: "shadow-blue-600",
		},
		{
			id: 5,
			src: MySQL,
			title: "MySQL",
			style: "shadow-sky-400",
		},
		{
			id: 6,
			src: Net,
			title: "Asp.net MVC",
			style: "shadow-green-500",
		},
		{
			id: 7,
			src: Angular,
			title: "Angular",
			style: "shadow-blue-500",
		},
		// {
		// 	id: 8,
		// 	src: mongodb,
		// 	title: "MongoDB",
		// 	style: "shadow-green-300",
		// },
		{
			id: 8,
			src: GitHub,
			title: "Github",
			style: "shadow-orange-500",
		},
		// {
		// 	id: 10,
		// 	src: postgresql,
		// 	title: "PostgreSQL",
		// 	style: "shadow-sky-500",
		// },
	];

	return (
		<div
			name="skills"
			className="container py-12 mx-auto text-gray-800"
		>
			<div className="max-w-3xl mx-auto">
				<div>
					<p className="text-3xl font-bold border-b-4 border-pink-500 mb-6">
						Skills
					</p>
					<p className="text-xl py-6 font-bold">
						These are the technologies I've worked with.
					</p>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
					{techs.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
						>
							<img src={src} alt="" className="w-20 mx-auto" />
							<p className="mt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
