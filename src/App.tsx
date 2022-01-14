import styled from 'styled-components'
import { NonStopWatch } from './components/NonStopWatch'
import type { StyledFC } from './types'

const App: StyledFC = (props) => {
  const { className } = props

  return (
    <div className={className} data-testid="App">
      <NonStopWatch />
    </div>
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
