import React from "react";
import NavBar from "../components/Navbar.jsx";
import FollowCursor from "../jsrepo/FollowCursor/FollowCursor";

function Events() {
	return (
		<div className="w-screen min-h-screen flex flex-col items-center pt-10 pb-10 bg-gray-100 relative overflow-hidden">
			<NavBar />
			<div className="container px-7 mt-10 flex flex-col items-center z-10">
				<h1 className="xl:text-[10vw] md:text-[14vw] font-pink font-extrabold text-center">XTENSIS</h1>
				<h1 className="xl:text-[10vw] md:text-[14vw] font-pink font-extrabold text-center -m-10">2k25</h1>
				<h2 className="text-8xl pt-12 mb-12 font-pink font-extrabold text-center">Exciting Events</h2>

				<div className="flex flex-row space-x-6 mb-12">
					<button
						onClick={() => document.getElementById("technical").scrollIntoView({ behavior: "smooth" })}
						className="group relative text-white px-8 py-4 rounded-lg text-xl transition-all duration-300 overflow-hidden">
						<span className="relative z-10">Technical Events</span>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
						<div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
					</button>
					<button
						onClick={() => document.getElementById("non-technical").scrollIntoView({ behavior: "smooth" })}
						className="group relative text-white px-8 py-4 rounded-lg text-xl transition-all duration-300 overflow-hidden">
						<span className="relative z-10">Non-Technical Events</span>
						<div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600"></div>
						<div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
					</button>
				</div>
			</div>
			{/* Shape 1 - Figure 8 shape */}
			<div
				className="absolute top-40 left-20 w-32 h-32 bg-blue-200 rotate-12"
				style={{
					borderRadius: "100% 0% 100% 0% / 0% 100% 0% 100%",
				}}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7JXWGf1tSb9JkWi7WUow6PJgjoA5cCGZMBQQauZzGYuxncEZ5HUrHlALn2QaChIQVdRQ&usqp=CAU"
					className="w-full h-full object-cover"
					alt="Tech"
				/>
			</div>
			{/* Shape 2 - Cloud shape */}
			<div
				className="absolute top-60 right-24 w-40 h-40 bg-pink-200 -rotate-12"
				style={{
					borderRadius: "90% 90% 50% 50% / 80% 80% 30% 30%",
				}}>
				<img
					src="https://img.freepik.com/free-photo/people-dancing-immersive-party-with-virtual-reality-headset-bright-neon-colors_23-2151419800.jpg?ga=GA1.1.19591793.1739180099&semt=ais_hybrid"
					className="w-full h-full object-cover"
					alt="Art"
				/>
			</div>
			{/* Shape 3 - Curved Clover */}
			<div
				className="absolute bottom-96 left-12 w-28 h-28 bg-yellow-200 rotate-45"
				style={{
					borderRadius: "100% 0% 100% 0% / 0% 100% 0% 100%",
					clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
				}}>
				<img
					src="https://source.unsplash.com/random/300x300?code"
					className="w-full h-full object-cover"
					alt="Code"
				/>
			</div>
			{/* Shape 4 - Abstract curved shape */}
			<div
				className="absolute bottom-40 right-16 w-36 h-36 bg-purple-200 -rotate-6"
				style={{
					borderRadius: "70% 30% 95% 5% / 25% 75% 25% 75%",
				}}>
				<img
					src="https://source.unsplash.com/random/300x300?creative"
					className="w-full h-full object-cover"
					alt="Creative"
				/>
			</div>
			<section
				id="technical"
				className="min-h-screen w-full flex items-center justify-center bg-blue-50 p-8">
				<div className="container mx-auto bg-black rounded-[3rem] shadow-2xl p-20 flex flex-col gap-20 relative border-2 border-gray-800">
					<h2 className="text-6xl font-pink font-extrabold mb-8 tracking-tight text-white">Technical Events</h2>
					<div className="grid grid-cols-1 gap-20">
						<div className="flex items-center">
							<div className="relative w-96 h-[400px] overflow-hidden rounded-[2rem] transform -translate-x-2 translate-y-12 z-20">
								<img
									src="https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
									alt="Hackathon"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="bg-gray-900 p-28 rounded-xl border border-gray-800 flex-1 text-white z-10">
								<h3 className="text-2xl font-bold mb-2 font-pink">Hackathon</h3>
								<p className="text-gray-300 font-medium">24-hour coding challenge to build innovative solutions</p>
							</div>
						</div>
						<div className="flex items-center">
							<div className="bg-gray-900 p-28 rounded-xl border border-gray-800 flex-1 text-white z-10">
								<h3 className="text-2xl font-bold mb-2 font-pink">Code Debug</h3>
								<p className="text-gray-300 font-medium">Find and fix bugs in complex code snippets</p>
							</div>
							<div className="relative w-96 h-[400px] overflow-hidden rounded-[2rem] transform translate-x-2 -translate-y-12 z-20">
								<img
									src="https://source.unsplash.com/random/300x300?debug"
									alt="Code Debug"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className="flex items-center">
							<div className="relative w-96 h-[400px] overflow-hidden rounded-[2rem] transform -translate-x-2 translate-y-12 z-20">
								<img
									src="https://source.unsplash.com/random/300x300?quiz"
									alt="Tech Quiz"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="bg-gray-900 p-28 rounded-xl border border-gray-800 flex-1 text-white z-10">
								<h3 className="text-2xl font-bold mb-2 font-pink">Tech Quiz</h3>
								<p className="text-gray-300 font-medium">Test your technical knowledge</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id="non-technical"
				className="min-h-screen w-full flex items-center justify-center bg-pink-50 p-8">
				<div className="container mx-auto bg-black rounded-[3rem] shadow-2xl p-20 flex flex-col gap-20 relative border-2 border-gray-800">
					<h2 className="text-6xl font-pink font-extrabold mb-8 tracking-tight text-white">Non-Technical Events</h2>
					<div className="grid grid-cols-1 gap-20">
						<div className="flex items-center">
							<div className="relative w-96 h-[400px] overflow-hidden rounded-[2rem] transform -translate-x-2 translate-y-12 z-20">
								<img
									src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
									alt="Talent Show"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="bg-gray-900 p-28 rounded-xl border border-gray-800 flex-1 text-white z-10">
								<h3 className="text-2xl font-bold mb-2 font-pink">Talent Show</h3>
								<p className="text-gray-300 font-medium">Showcase your unique talents on stage</p>
							</div>
						</div>
						<div className="flex items-center">
							<div className="bg-gray-900 p-28 rounded-xl border border-gray-800 flex-1 text-white z-10">
								<h3 className="text-2xl font-bold mb-2 font-pink">Art Exhibition</h3>
								<p className="text-gray-300 font-medium">Display your artistic creations</p>
							</div>
							<div className="relative w-96 h-[400px] overflow-hidden rounded-[2rem] transform translate-x-2 -translate-y-12 z-20">
								<img
									src="https://source.unsplash.com/random/300x300?art"
									alt="Art Exhibition"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className="flex items-center">
							<div className="relative w-96 h-[400px] overflow-hidden rounded-[2rem] transform -translate-x-2 translate-y-12 z-20">
								<img
									src="https://source.unsplash.com/random/300x300?dance"
									alt="Cultural Dance"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="bg-gray-900 p-28 rounded-xl border border-gray-800 flex-1 text-white z-10">
								<h3 className="text-2xl font-bold mb-2 font-pink">Cultural Dance</h3>
								<p className="text-gray-300 font-medium">Celebrate diversity through dance</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<FollowCursor
                offsetX={20}
                cardWidth="200px"
                rotationFactor={10}
                enableTilt={true}
                animationConfig={{ mass: 5, tension: 350, friction: 40 }}
                wheelConfig={{ mass: 1, tension: 200, friction: 30 }}>
                <p className="translate-y-34 text-white bg-black/60 rounded-2xl text-sm font-normal font-inter p-1">
                    Check out our amazing events!
                </p>
            </FollowCursor>
		</div>
	);
}

export default Events;
