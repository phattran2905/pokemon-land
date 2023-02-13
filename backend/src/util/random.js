import { customAlphabet } from "nanoid"

const nanoid = customAlphabet("1234567890abcdef", 10)

export const getRandomElement = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length)
	return array[randomIndex]
}

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const randomUID = () => nanoid()
