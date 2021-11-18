import { useContext, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { ThemesStore } from './context/ThemeProvider'

function App() {
	const themeCtx = useContext(ThemesStore)
	const selectedTheme = themeCtx.selectedTheme
	const isFirstRun = useRef(true)

	useEffect(() => {
		let storedTheme = localStorage.getItem('theme')
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
			localStorage.setItem('theme', selectedTheme.name)
		}
	}, [selectedTheme])

	return (
		<div className='App'>
			<Navbar {...themeCtx} />
			<div className='text'>hello,world!</div>
		</div>
	)
}

export default App
