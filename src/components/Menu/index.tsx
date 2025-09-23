import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three'

// Mock Text component to simulate your import
const Text = ({ children, position, size, color, ...props }) => (
  <mesh position={position}>
    <textGeometry args={[children, { font: null, size: size / 100, height: 0.01 }]} />
    <meshStandardMaterial color={color} />
  </mesh>
)

// Utility functions matching your imports
const color = (value) => ({ color: new THREE.Color().setScalar(value) })
const applyMaterial = (scene, materials) => ({ materials })

// Card layouts matching your original structure
const layouts = {
  wide: {
    card1: [-1, 1],
    card2: [1, 1],
    card3: [-1, -1],
    card4: [1, -1],
    offset: [0, 0]
  }
}

// Mock Redux hooks
const useAppDispatch = () => () => console.log('dispatch')
const useAppSelector = (selector) => ({
  translation: { CARD_ONE: 'Card One', CARD_TWO: 'Card Two', CARD_THREE: 'Card Three', CARD_FOUR: 'Card Four' },
  theme: 'light',
  route: 'card1',
  layout: 'wide'
})

const setCursor = (payload) => ({ type: 'SET_CURSOR', payload })
const resetCursor = (id) => ({ type: 'RESET_CURSOR', payload: id })
const setRoute = (payload) => ({ type: 'SET_ROUTE', payload })

const CardItem = ({ cardID, position, children }) => {
  const [isPointerOver, setIsPointerOver] = useState(false)
  const { translation, theme, route, layout } = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  
  const { rotation, scale } = useSpring({
    rotation: route === cardID ? 3.16 : (isPointerOver ? 0.1 : 0),
    scale: isPointerOver ? 1.05 : 1,
    config: { friction: 30 }
  })

  const { textColor, cubeColor } = useSpring({
    textColor: theme === 'light' ? '#333333' : '#dddddd',
    cubeColor: theme === 'light' ? (isPointerOver ? 1.2 : 0.8) : (isPointerOver ? 0.05 : 0.02)
  })

  const handlePointerOver = () => {
    dispatch(setCursor({ id: cardID, cursor: 'pointer' }))
    setIsPointerOver(true)
  }

  const handlePointerOut = () => {
    dispatch(resetCursor(cardID))
    setIsPointerOver(false)
  }

  const handleClick = () => {
    dispatch(setRoute({ route: cardID }))
    console.log(`Clicked ${cardID}`)
  }

  return (
    <group position={[position[0] * 2.5, position[1] * 2, -4.5]}>
      <animated.group position={[0, 0.5, 0.5]} rotation-x={rotation} scale={scale}>
        <group position={[0, -1, 1]}>
          <mesh
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={handleClick}
          >
            <boxGeometry args={[1.8, 1.2, 0.15]} />
            <animated.meshStandardMaterial 
              color={cubeColor.to(val => new THREE.Color().setScalar(val))}
              roughness={1}
              metalness={0.1}
            />
          </mesh>
          
          {/* Card content area */}
          <mesh position={[0, 0.1, 0.08]}>
            <boxGeometry args={[1.6, 0.8, 0.02]} />
            <meshStandardMaterial color="#ffffff" roughness={0.8} />
          </mesh>
          
          <Text
            position={[0, 0.3, 0.1]}
            size={8}
            color={textColor}
          >
            {cardID.toUpperCase()}
          </Text>
          
          <Text
            position={[0, -0.1, 0.1]}
            size={4}
            color={textColor}
          >
            {children}
          </Text>
        </group>
      </animated.group>
    </group>
  )
}

const Scene = () => {
  const layout = 'wide'
  
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />
      
      <Suspense fallback={null}>
        <CardItem 
          cardID="card1" 
          position={layouts.wide.card1}
        >
          Project Alpha
        </CardItem>
        <CardItem 
          cardID="card2" 
          position={layouts.wide.card2}
        >
          Services
        </CardItem>
        <CardItem 
          cardID="card3" 
          position={layouts.wide.card3}
        >
          About Me
        </CardItem>
        <CardItem 
          cardID="card4" 
          position={layouts.wide.card4}
        >
          Contact
        </CardItem>
      </Suspense>
    </>
  )
}

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading 3D Cards...</p>
    </div>
  </div>
)

export default function Menu() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-br from-gray-50 to-gray-200">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          className="w-full h-full"
        >
          <Scene />
        </Canvas>
      </Suspense>
      
      <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">3D Card Menu</h1>
        <p className="text-sm text-gray-600">Hover and click cards to interact</p>
      </div>
    </div>
  )
}