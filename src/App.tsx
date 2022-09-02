import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { NonStopWatch } from './components/NonStopWatch'
import type { StyledFC } from './types'
import { Card } from './components/ygo-card/source/card'
import { useEffect, useRef, useState } from 'react'
import './App.css'

const PortfolioSummary: StyledFC = () => {
  const [src, setSrc] = useState('')
  const cardRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const card = cardRef.current

    if (card) {
      const data = {
        name: 'This dude',
        _id: '59438930',
        type: 'monster',
        type2: 'effect',
        type3: 'tuner',
        attribute: 'dark',
        level: 3,
        race: 'Psychic',
        desc: 'With this weird name, or when a Spell/Trap that is already face-up on the field activates its effect (Quick Effect): You can send this card from your hand or field to the GY; destroy that card on the field. You can only use this effect of "Ghost Ogre & Snow Rabbit" once per turn',
        attack: 0,
        defend: 1800
      }

      new Card({ data, canvas: card, size: [200, 250], moldPath: '/dist/mold' })
        .render()

      setTimeout(() => {
        setSrc(card.toDataURL('image/png'))
      }, 1000)
    }
  }, [])

  return (
    <div>
      {src && <div
        style={{
          width: '400px',
          height: '600px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundImage: `url(${src})`
        }}
      />}
      <canvas ref={cardRef} style={{ display: 'none' }} />
    </div>
  )
}

const App: StyledFC = (props) => {
  const { className } = props

  return (
    <Router>
      <div className={className} data-testid="App">
        <Routes>
          <Route path="/" element={<PortfolioSummary />} />
          <Route path="*" element={<NonStopWatch />} />
        </Routes>
      </div>
    </Router>
  )
}

const StyledApp = styled(App)`
  font-family: 'Courier New', Courier, monospace;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(background.jpg);
  background-size: cover;
`

export default StyledApp
