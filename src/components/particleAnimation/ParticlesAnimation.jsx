import { useCallback } from 'react'
import './ParticlesAnimation.css'
import Particles from 'react-tsparticles'

const ParticlesAnimation = ({
  id = 'tsparticles',
  numberOfCircles,
  CircleSizeMin,
  CircleSizeMax,
}) => {
  const particlesInit = useCallback(async (engine) => {
    const { loadSlim } = await import('tsparticles-slim')
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  return (
    <Particles
      className='myparticles'
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fps_limit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            // onClick: {
            //   enable: true,
            //   mode: "push",
            // },
          },
          modes: {
            repulse: {
              distance: 180,
              duration: 0.3,
            },
            // push:{
            //   quantity:2
            // }
          },
        },
        particles: {
          color: {
            value: '#A0A09B',
          },
          links: {
            color: '#A0A09B',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
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
            value: numberOfCircles,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: {
              default: 'bounce',
            },
            speed: 2,
          },
          opacity: {
            value: 0.4,
          },
          collisions: {
            enable: true,
          },
        },
      }}
    />
  )
}

export default ParticlesAnimation
