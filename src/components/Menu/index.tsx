import React, { useState } from 'react'

// Mock Redux hooks to simulate your store structure
const useAppDispatch = () => {
  return (action) => {
    console.log('Dispatch:', action)
  }
}

const useAppSelector = (selector) => {
  return {
    translation: {
      CARD_ONE: 'Card One',
      CARD_TWO: 'Card Two', 
      CARD_THREE: 'Card Three',
      CARD_FOUR: 'Card Four'
    },
    theme: 'light',
    route: 'card1',
    layout: 'wide'
  }
}

// Mock action creators
const setCursor = (payload) => ({ type: 'SET_CURSOR', payload })
const resetCursor = (id) => ({ type: 'RESET_CURSOR', payload: id })
const setRoute = (payload) => ({ type: 'SET_ROUTE', payload })

// Card layouts matching your original structure - exported for Camera component
export const layouts = {
  wide: {
    card1: [0, 0],
    card2: [1, 0], 
    card3: [0, 1],
    card4: [1, 1],
    offset: [0, 0]
  },
  tall: {
    card1: [0, 0],
    card2: [0, 1],
    card3: [0, 2], 
    card4: [0, 3],
    offset: [0, 0]
  }
}

const MenuItem = ({ cardID, children, description }) => {
  const [isPointerOver, setIsPointerOver] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const { translation, theme, route, layout } = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  const isActive = route === cardID
  
  const handlePointerOver = () => {
    dispatch(setCursor({ id: cardID, cursor: 'pointer' }))
    setIsPointerOver(true)
  }

  const handlePointerOut = () => {
    dispatch(resetCursor(cardID))
    setIsPointerOver(false)
  }

  const handleClick = () => {
    setIsAnimating(true)
    dispatch(setRoute({ route: cardID }))
    setTimeout(() => setIsAnimating(false), 300)
  }

  const cardStyles = {
    background: theme === 'light' 
      ? (isPointerOver ? '#f8f9fa' : '#ffffff') 
      : (isPointerOver ? '#2d3748' : '#1a202c'),
    color: theme === 'light' ? '#2d3748' : '#e2e8f0',
    transform: `
      ${isPointerOver ? 'scale(1.02) translateY(-2px)' : 'scale(1) translateY(0px)'}
      ${isActive ? 'rotateY(180deg)' : 'rotateY(0deg)'}
      ${isAnimating ? 'rotateX(10deg)' : 'rotateX(0deg)'}
    `,
    boxShadow: isPointerOver 
      ? '0 8px 25px rgba(0,0,0,0.15)' 
      : '0 2px 10px rgba(0,0,0,0.1)',
    borderColor: isActive ? '#3182ce' : 'transparent'
  }

  return (
    <div
      className="relative bg-white rounded-xl p-6 border-2 cursor-pointer select-none"
      style={{
        ...cardStyles,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transformStyle: 'preserve-3d',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onMouseEnter={handlePointerOver}
      onMouseLeave={handlePointerOut}
      onClick={handleClick}
    >
      {/* Card Icon/Visual Area */}
      <div 
        className="w-full h-20 rounded-lg mb-4 flex items-center justify-center"
        style={{
          background: theme === 'light' 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            : 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
          opacity: isPointerOver ? 0.9 : 0.7,
          transition: 'opacity 0.3s ease'
        }}
      >
        <div className="text-white text-2xl font-bold">
          {cardID.slice(-1)}
        </div>
      </div>

      {/* Card Title */}
      <h3 className="text-xl font-semibold mb-2" style={{ color: cardStyles.color }}>
        {children}
      </h3>

      {/* Card Description */}
      <p 
        className="text-sm opacity-70 flex-1"
        style={{ color: cardStyles.color }}
      >
        {description}
      </p>

      {/* Active Indicator */}
      {isActive && (
        <div 
          className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full"
          style={{
            animation: 'pulse 2s infinite',
          }}
        />
      )}

      {/* Hover Glow Effect */}
      {isPointerOver && (
        <div 
          className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, #3182ce 0%, transparent 70%)',
            animation: 'pulse 1.5s infinite'
          }}
        />
      )}
    </div>
  )
}

export default function Menu() {
  const { layout } = useAppSelector(state => state)
  const currentLayout = layouts[layout] || layouts.wide

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Portfolio Menu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interactive card grid layout inspired by your 3D menu system. 
            Hover over cards to see animations and click to navigate.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <MenuItem cardID="card1" description="Explore my latest projects and technical work">
            Portfolio
          </MenuItem>
          
          <MenuItem cardID="card2" description="Services I offer including development and consulting">
            Services  
          </MenuItem>
          
          <MenuItem cardID="card3" description="Learn more about my background and experience">
            About Me
          </MenuItem>
          
          <MenuItem cardID="card4" description="Get in touch for collaborations and opportunities">
            Contact
          </MenuItem>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>Click cards to navigate • Hover for interactions</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}