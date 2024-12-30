'use client'

import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'

interface CardProps {
  frontImage: string
  flippedDelay: number
}

const Card: React.FC<CardProps> = ({ frontImage, flippedDelay }) => {
  const [flipped, setFlipped] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFlipped(false)
    }, flippedDelay)

    return () => clearTimeout(timeout)
  }, [flippedDelay])

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '245px',
    height: 'auto',
    cursor: 'pointer',
    willChange: 'transform, opacity',
    marginBottom: '20px',
    borderRadius: '14px',
    overflow: 'hidden'
  }

  return (
    <div
      onClick={() => setFlipped((state) => !state)}
      style={{
        perspective: '1000px',
        position: 'relative',
        paddingTop: '139%' // Maintain aspect ratio
      }}
    >
      <animated.div
        style={{
          ...cardStyle,
          opacity: opacity.to((o) => 1 - o),
          transform,
          position: 'absolute',
          top: 0,
          left: 0,
          backfaceVisibility: 'hidden'
        }}
      >
        <Image
          src={frontImage}
          alt='Pokemon card front'
          width={245}
          height={342}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </animated.div>
      <animated.div
        style={{
          ...cardStyle,
          opacity,
          transform: transform.to((t) => `${t} rotateY(180deg)`),
          position: 'absolute',
          top: 0,
          left: 0,
          backfaceVisibility: 'hidden'
        }}
      >
        <Image
          src='https://tcg.pokemon.com/assets/img/global/tcg-card-back.jpg'
          alt='Pokemon card back'
          width={245}
          height={342}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </animated.div>
    </div>
  )
}

export default Card
