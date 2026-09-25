import { useCallback, useEffect, useState } from 'react'
import './ParticlesAnimation.css'

const ParticlesAnimation = ({
  id = 'tsparticles',
  numberOfCircles,
  CircleSizeMin,
  CircleSizeMax,
}) => {
  const [Particles, setParticles] = useState(null)

  useEffect(() => {
    let cancelled = false
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const isSmallScreen = window.innerWidth < 768

    if (reduceMotion || isSmallScreen) {
      setParticles(null)
      return () => {
        cancelled = true
      }
    }

    import('react-tsparticles')
      .then((mod) => {
        if (!cancelled) setParticles(() => mod.default)
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [])

  const particlesInit = useCallback(async (engine) => {
    const { loadSlim } = await import('tsparticles-slim')
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  if (!Particles) return null

  return (
    <Particles
      className='myparticles'
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fps_limit: 30,
        detectRetina: false,
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
          },
          modes: {},
        },
        particles: {
          color: {
            value: '#A0A09B',
          },
          links: {
            color: '#A0A09B',
            distance: 120,
            enable: false,
            opacity: 0.12,
            width: 0.8,
          },
          shape: {
            type: 'circle',
            options: {
              color: 'blue',
            },
          },
          size: {
            value: { min: CircleSizeMin, max: CircleSizeMax },
          },
          number: {
            value: Math.max(8, Math.min(numberOfCircles, 16)),
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: {
              default: 'out',
            },
            speed: 0.7,
            random: true,
          },
          opacity: {
            value: 0.38,
          },
          collisions: {
            enable: false,
          },
          reduceDuplicates: true,
        },
      }}
    />
  )
}

export default ParticlesAnimation
