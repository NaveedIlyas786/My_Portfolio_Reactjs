import { useCallback, useEffect, useRef, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'
import './App.css'
import Themes from './components/ThemesSection/Themes'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'
import Loader from './components/Loader'
import './tailwind.css'

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <Routes location={location}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const loaderRef = useRef(null)

  const handleDone = useCallback(() => {
    if (loaderRef.current) {
      loaderRef.current.classList.add('is-leaving')
    }
    setTimeout(() => setLoading(false), 200)
  }, [])

  return (
    <BrowserRouter>
      {loading && (
        <div ref={loaderRef}>
          <Loader onDone={handleDone} />
        </div>
      )}
      <Navbar />
      <Themes />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
