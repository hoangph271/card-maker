import styled from 'styled-components'
import type { StyledFC } from './types'

const App: StyledFC = (props) => {
  const { className } = props

  return (
    <div className={className} data-testid="App">
      <header className="App-header">
        {'App...!'}
      </header>
    </div>
  )
}

const StyledApp = styled(App)`
  font-family: 'Courier New', Courier, monospace;
`

export default StyledApp
