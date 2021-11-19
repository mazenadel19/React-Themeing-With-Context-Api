import { useContext, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { ThemesStore } from './context/ThemeProvider'

function App() {
	const themeCtx = useContext(ThemesStore)
	const { selectedTheme, changeTheme, themes } = themeCtx
	const isFirstRun = useRef(true)

	useEffect(() => {
		let storedThemeColor = localStorage.getItem('themeColor')
		let storedThemeName = localStorage.getItem('themeName')

		if (storedThemeColor && isFirstRun.current) {
			isFirstRun.current = false
			changeTheme(storedThemeName)
			document.documentElement.style.setProperty(
				'--text-color',
				storedThemeColor,
			)
		} else {
			document.documentElement.style.setProperty(
				'--text-color',
				selectedTheme.color,
			)
		}

		localStorage.setItem('themeColor', selectedTheme.color)
		localStorage.setItem('themeName', selectedTheme.name)
	}, [changeTheme, selectedTheme])

	return (
		<div className='App'>
			<Navbar
				selectedTheme={selectedTheme}
				themes={themes}
				changeTheme={changeTheme}
			/>
			<div className='text'>hello,world!</div>
		</div>
	)
}

export default App
