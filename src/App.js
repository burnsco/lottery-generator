import React, { useState } from 'react'
import Lotto from './Lotto'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Title = styled.h2`
  padding: 20px;
  border: 1px solid blue;
  border-radius: 20px;
`

function App() {
  const [generate, setGenerate] = useState(false)
  const refreshApp = () => {
    setGenerate(!generate)
  }
  return (
    <Container>
      <AppHeader>
        <Title>Lotto Generator Component</Title>
        <Lotto
          title="Mini Daily"
          numBalls={7}
          maxNum={99}
          generate={refreshApp}
        />
      </AppHeader>
    </Container>
  )
}

export default App
