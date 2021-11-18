import { useContext, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { ThemesStore } from './context/ThemeProvider'

function App() {
	const themeCtx = useContext(ThemesStore)
	const { selectedTheme, changeTheme, themes } = themeCtx
	const isFirstRun = useRef(true)

	useEffect(() => {
		let storedTheme = localStorage.getItem('themeColor')
		if (storedTheme && isFirstRun.current) {
			isFirstRun.current = false
			document.documentElement.style.setProperty(
				'--text-color',
				storedTheme,
			)
		} else {
			document.documentElement.style.setProperty(
				'--text-color',
				selectedTheme.color,
			)
			localStorage.setItem('themeColor', selectedTheme.color)
		}
	}, [selectedTheme])

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
