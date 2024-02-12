import React from "react";

const Experience = () => {
	return (
		<div
			name="experience"
			className="container py-12 mx-auto text-gray-800"
		>
			<div className="max-w-3xl mx-auto">
				<div className="pb-8">
					<h2 className="text-3xl font-bold border-b-4 border-pink-500 mb-6">
						Experience
					</h2>
				</div>
				<div className="mt-8">
					<h3 className="text-xl font-bold mb-2">
						Community Manager - Rubey Studio (2023)
					</h3>
					<ul className="list-disc list-inside pl-4">
						<li className="text-lg">
							Collaborated with the creative team to ideate and
							execute visually compelling campaigns, photo
							shoots, and design projects, ensuring a seamless
							fusion of artistic expression and brand messaging.
						</li>
						<li className="text-lg">
							Stayed abreast of industry trends and best
							practices in social media, photography, and design,
							implementing innovative strategies to maintain a
							competitive edge and captivate the studio's
							audience.
						</li>
					</ul>
				</div>
				{/* <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">NYC Department Of Correction | Correctional Officer (2017-2020)</h3>
          <ul className="list-disc list-inside pl-4">
            <li className="text-lg">Led intake officer responsible for managing and broadening use cases for database management, reducing processing times by 30%.</li>
            <li className="text-lg">Coordinated rotating shift assignments for an intake unit consisting of 10+ officers, including communication of responsibilities and monitoring schedules.</li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Don Coqui Restaurant | Waiter/Bartender/Manager (2011-2017)</h3>
          <ul className="list-disc list-inside pl-4">
            <li className="text-lg">Oversaw a high-volume flagship location with monthly revenue of $60,000.</li>
            <li className="text-lg">Developed updated hiring, training, and management protocols resulting in a 20% higher retention rate than other regional locations.</li>
            <li className="text-lg">Created a positive customer experience by establishing strong communication with staff and patrons.</li>
          </ul>
        </div> */}
			</div>
		</div>
	);
};

export default Experience;
