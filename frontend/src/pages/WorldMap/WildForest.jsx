import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import MenuBar from "../../components/MenuBar"
import CookieImg from "../../assets/img/item/Cookie.png"

export default function WildForest() {
	return (
		<div className="container-xl flex flex-col h-screen justify-between">
			<Header />

			<div className="w-full h-full flex flex-row">
				<MenuBar />

				<div className="w-full h-full bg-background-img-5 bg-no-repeat bg-cover flex flex-row justify-between items-stretch gap-10 p-10">
					<div className="bg-white rounded-xl w-2/6 px-6 py-4 flex flex-col justify-between">
						{/* Items */}
						<div className="m-4">
							<div className="w-full h-24 my-4 border-4 border-Flamingo-Pink rounded-xl flex flex-row justify-around items-center">
								<div className="flex flex-row">
									<img
										className="w-14 h-14"
										src={CookieImg}
										alt="Item Icon"
									/>
									<div className="flex flex-col justify-between ml-4">
										<span className="text-black font-bold text-lg capitalize">
											Cookie
										</span>
										<span className="text-Forest-Green">Capture rate +10%</span>
									</div>
								</div>
								<div>
									<input
										className="w-14 border-black border-2 px-2 py-1 text-Indigo-Blue font-bold text-lg rounded-md"
										type="number"
										value={1}
										min={1}
										step={1}
									/>
									<span className="ml-2 text-black font-bold text-xl">/ 10</span>
								</div>
							</div>

							<div className="w-full h-24 my-4 border-2 border-Indigo-Blue rounded-xl flex flex-row justify-around items-center">
								<div className="flex flex-row">
									<img
										className="w-14 h-14"
										src={CookieImg}
										alt="Item Icon"
									/>
									<div className="flex flex-col justify-between ml-4">
										<span className="text-black font-bold text-lg capitalize">
											Cookie
										</span>
										<span className="text-Forest-Green">Capture rate +10%</span>
									</div>
								</div>
								<div>
									<input
										className="w-14 border-black border-2 px-2 py-1 text-Indigo-Blue font-bold text-lg rounded-md"
										type="number"
										value={0}
										min={1}
										step={1}
									/>
									<span className="ml-2 text-black font-bold text-xl">/ 10</span>
								</div>
							</div>
						</div>

						{/* Button */}
						<div className="flex flex-row justify-end p-4">
							<button className="py-3 px-14 bg-Midnight-Gray text-white font-bold text-xl rounded-full border-2 border-Midnight-Gray hover:bg-white hover:text-Indigo-Blue hover:border-2 hover:border-Indigo-Blue transition-colors duration-200">
								Skip
							</button>
							<button className="py-2 px-14 ml-4 bg-Flamingo-Pink text-white font-bold text-xl rounded-full border-2 border-Flamingo-Pink hover:bg-white hover:text-Indigo-Blue hover:border-2 hover:border-Indigo-Blue transition-colors duration-200">
								Use
							</button>
						</div>
					</div>

					<div className="bg-Flamingo-Pink">Capture button</div>

					<div className="bg-white">
						<div>Pokemon stats</div>
						<div>Pokemon image</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}
