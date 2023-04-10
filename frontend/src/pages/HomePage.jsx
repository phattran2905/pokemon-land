import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { GiBroadsword, GiLightningShield } from "react-icons/gi"
import { TbAwardFilled } from "react-icons/tb"
import { FaChessRook } from "react-icons/fa"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MenuBar from "../components/menu/MenuBar"
import { logout } from "../redux/slices/auth"
import { useLogoutMutation } from "../redux/services/authentication"
import { useGetTrainerInfoQuery } from "../redux/services/trainer"
import { updateTrainerInfo } from "../redux/slices/trainer"
import { useGetTopMonstersQuery } from "../redux/services/monster"

export default function HomePage() {
	const navigate = useNavigate()
	const authState = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const [fetchLogoutApi] = useLogoutMutation()
	const { data: trainerData } = useGetTrainerInfoQuery({
		jwt_token: authState.jwtToken,
	})
	const { data: topMonsters } = useGetTopMonstersQuery()
	const [topLevel, setTopLevel] = useState()
	const [topAttack, setTopAttack] = useState()
	const [topDefense, setTopDefense] = useState()

	useEffect(() => {
		// Redirect to login if not logged in
		if (!authState.isLoggedIn) {
			return navigate("/login")
		}

		// Create first character
		if (!trainerData) {
			return navigate("/create-trainer")
		} else {
			dispatch(updateTrainerInfo(trainerData))
		}
	}, [authState.isLoggedIn])

	useEffect(() => {
		if (topMonsters) {
			// Level > Attack > Defense
			const [level, attack, defense] = topMonsters
			setTopLevel(level)
			setTopAttack(attack)
			setTopDefense(defense)
		}
	}, [topMonsters])

	const handleLogout = async (e) => {
		e.preventDefault()

		await fetchLogoutApi({ jwt_token: authState.jwtToken })
		dispatch(logout())
	}

	return (
		<div className="container-xl flex flex-col h-screen justify-between">
			<Header />

			<div className="w-full h-full flex flex-row">
				<MenuBar handleLogout={handleLogout} />

				{/* Top Monster */}
				<div className="w-full px-32 py-12 flex flex-col justify-start items-center">
					{/* Title */}
					<div className="flex flex-col justify-center items-center mx-auto w-1/2 p-4 bg-Gold-Sand rounded-lg shadow-md">
						<h1 className=" font-bold text-4xl text-center uppercase text-Indigo-Blue">
							Golden Board
						</h1>
						<TbAwardFilled size={40} className="text-Indigo-Blue mt-2" />
					</div>

					<div className="mt-32 w-full flex flex-row justify-between items-center">
						{/* Top Level */}
						<div className="flex flex-col w-96">
							{/* Title */}
							<div className="bg-Flamingo-Pink shadow-md shadow-Fire-Engine-Red rounded-lg p-4 flex flex-row justify-center items-center mb-10">
								<FaChessRook
									size={24}
									className="text-Gold-Sand"
								/>
								<h2 className="text-2xl font-bold text-white mx-2">No.1 Level</h2>
							</div>
							{/* Image */}
							<div className="w-full h-[28rem] pb-16 mb-8 rounded-lg shadow-md">
								<img
									className="w-full h-full object-scale-down"
									src={`img/monsters/${topLevel?.img_name}`}
								/>
							</div>
							{/* Details */}
							<div className="w-full rounded-lg shadow-md shadow-Royal-Blue">
								{/* Name */}
								<div className="p-4 bg-Indigo-Blue w-full">
									<p className="font-bold text-white text-center text-xl">
										{topLevel?.name}
									</p>
								</div>
								{/* Attribute */}
								<div className="p-8 flex flex-row justify-around items-center">
									<div className="flex flex-row items-center">
										<FaChessRook
											size={22}
											className="text-Flamingo-Pink"
										/>
										<span className="text-Indigo-Blue font-bold mx-2 text-lg">
											Level
										</span>
									</div>
									<div className="bg-Midnight-Gray rounded-lg p-2">
										<span className="font-bold text-white">
											{topLevel?.level}
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Top Attack */}
						<div className="flex flex-col w-96">
							{/* Title */}
							<div className="bg-Flamingo-Pink shadow-md shadow-Fire-Engine-Red rounded-lg p-4 flex flex-row justify-center items-center mb-10">
								<GiBroadsword
									size={24}
									className="text-Gold-Sand"
								/>
								<h2 className="text-2xl font-bold text-white mx-2">No.1 Attack</h2>
							</div>
							{/* Image */}
							<div className="w-full h-[28rem] pb-16 mb-8 rounded-lg shadow-md">
								<img
									className="w-full h-full object-scale-down"
									src={`img/monsters/${topAttack?.img_name}`}
								/>
							</div>
							{/* Details */}
							<div className="w-full rounded-lg shadow-md shadow-Royal-Blue">
								{/* Name */}
								<div className="p-4 bg-Indigo-Blue w-full">
									<p className="font-bold text-white text-center text-xl">
										{topAttack?.name}
									</p>
								</div>
								{/* Attribute */}
								<div className="p-8 flex flex-row justify-around items-center">
									<div className="flex flex-row items-center">
										<GiBroadsword
											size={22}
											className="text-Flamingo-Pink"
										/>
										<span className="text-Indigo-Blue font-bold mx-2 text-lg">
											Attack
										</span>
									</div>
									<div className="bg-Midnight-Gray rounded-lg p-2">
										<span className="font-bold text-white">
											{topAttack?.attack}
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Top Defense */}
						<div className="flex flex-col w-96">
							{/* Title */}
							<div className="bg-Flamingo-Pink shadow-md shadow-Fire-Engine-Red rounded-lg p-4 flex flex-row justify-center items-center mb-10">
								<GiLightningShield
									size={24}
									className="text-Gold-Sand"
								/>
								<h2 className="text-2xl font-bold text-white mx-2">No.1 Level</h2>
							</div>
							{/* Image */}
							<div className="w-full h-[28rem] pb-16 mb-8 rounded-lg shadow-md">
								<img
									className="w-full h-full object-scale-down"
									src={`img/monsters/${topDefense?.img_name}`}
								/>
							</div>
							{/* Details */}
							<div className="w-full rounded-lg shadow-md shadow-Royal-Blue">
								{/* Name */}
								<div className="p-4 bg-Indigo-Blue w-full">
									<p className="font-bold text-white text-center text-xl">
										{topDefense?.name}
									</p>
								</div>
								{/* Attribute */}
								<div className="p-8 flex flex-row justify-around items-center">
									<div className="flex flex-row items-center">
										<GiLightningShield
											size={22}
											className="text-Flamingo-Pink"
										/>
										<span className="text-Indigo-Blue font-bold mx-2 text-lg">
											Defense
										</span>
									</div>
									<div className="bg-Midnight-Gray rounded-lg p-2">
										<span className="font-bold text-white">
											{topDefense?.defense}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}
