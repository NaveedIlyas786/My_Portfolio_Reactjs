import { useEffect, useState } from 'react'
import './loader.css'

const DURATION = 1600

const Loader = ({ onDone }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const next = Math.min(Math.round((elapsed / DURATION) * 100), 100)
      setProgress(next)

      if (next < 100) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(onDone, 200)
      }
    }

    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  const r = 36
  const circ = 2 * Math.PI * r
  const offset = circ - (progress / 100) * circ

  return (
    <div className='loader-root'>
      <div className='loader-card'>
        <div className='loader-ring-wrap'>
          <svg className='loader-svg' viewBox='0 0 88 88' aria-hidden='true'>
            <circle className='loader-track' cx='44' cy='44' r={r} />
            <circle
              className='loader-fill'
              cx='44'
              cy='44'
              r={r}
              strokeDasharray={circ}
              strokeDashoffset={offset}
            />
          </svg>
          <span className='loader-pct'>{progress}</span>
        </div>
        <p className='loader-label'>Loading portfolio</p>
        <span className='loader-dots' aria-hidden='true' />
      </div>
    </div>
  )
}

export default Loader
