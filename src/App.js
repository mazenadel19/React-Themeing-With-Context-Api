import { useContext, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ThemesStore } from './context/ThemeProvider'

function App() {
	const themeCtx = useContext(ThemesStore)
	const { selectedTheme, changeTheme, themes } = themeCtx

	const isFirstRun = useRef(true)

	useEffect(() => {
		let storedThemeName = localStorage.getItem('themeName')
		const storedTheme = themes.find(theme => theme.name === storedThemeName)

		if (storedThemeName && isFirstRun.current) {
			isFirstRun.current = false
			changeTheme(storedTheme.name)
			document.documentElement.style.setProperty('--text-color',storedTheme.color)
		} else {
			document.documentElement.style.setProperty('--text-color',selectedTheme.color)
		}
		localStorage.setItem('themeName', selectedTheme.name)
	}, [changeTheme, selectedTheme, themes])

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
