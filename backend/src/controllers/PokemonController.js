import PokemonModel from "../models/pokemon/PokemonModel.js"

// Populate Pokemon data for frontend to render
const populatePokemonData = (pokemonDoc) => ({
	uid: pokemonDoc.uid,
	level: pokemonDoc.level,
	exp: pokemonDoc.exp,
	level_up_exp: pokemonDoc.level_up_exp,
	power: pokemonDoc.power,
	capture_rate: pokemonDoc.capture_rate,
	name: pokemonDoc.info.name,
	img_name: pokemonDoc.info.img_name,
	level_up_exp_rate: pokemonDoc.info.level_up_exp_rate,
	type: pokemonDoc.info.pkmType.map((i) => i.name),
	status: pokemonDoc.status,
})

// Get A Pokemon by id
export const getPokemonById = async (req, res) => {
	try {
		const pokemonDoc = await PokemonModel.findOne({ uid: req.params.id }).populate({
			path: "info",
			populate: { path: "pkmType", select: "-_id -uid name" },
		})

		if (!pokemonDoc) {
			return res.status(404).json({ message: "Not Found" })
		}

		const pokemon = populatePokemonData(pokemonDoc)

		return res.status(200).json(pokemon)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: error.message })
	}
}

// Get All Pokemon
export const getAllPokemon = async (req, res) => {
	try {
		const criteria = req.query.status ? { status: req.query.status } : null

		const pokemonListDoc = await PokemonModel.find(criteria).populate({
			path: "info",
			populate: { path: "pkmType", select: "-_id -uid name" },
		})

		const pokemonList = pokemonListDoc.map((pokemon) => populatePokemonData(pokemon))

		return res.status(200).json(pokemonList)
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}