import { createContext, useState } from 'react'
import themes from '../assets/themes.json'
export const ThemesStore = createContext({})

const ThemesProvider = ({ children }) => {
	const [selectedTheme, setSelectedTheme] = useState(themes[0])

	const changeTheme = (name = '') => {
		const selectedTheme = themes.find(theme => theme.name === name)
		setSelectedTheme(selectedTheme)
	}

	return (
		<ThemesStore.Provider
			value={{
				selectedTheme,
				changeTheme,
				themes,
			}}>
			{children}
		</ThemesStore.Provider>
	)
}

export default ThemesProvider
