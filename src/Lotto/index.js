import React from 'react'
import styled from 'styled-components'
import { Ball } from './Ball'

// <Lottery title="Mini Daily" numBalls={4} maxNum={10}></Lottery>
// ball amount (4 - 10)
// ball value range (10-40)

const Container = styled.div`
  border: 1px solid grey;
  border-radius: 2px;
  min-width: 470px;
  min-height: 150px;
`

const Title = styled.strong`
  color: burlywood;
`

const BallContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  margin: 10px;
`

const GenerateButton = styled.button`
  background: blueviolet;
  color: white;
`

const index = () => {
  return (
    <Container>
      <Title>Lotto</Title>
      <BallContainer>
        <Ball value="45" />
      </BallContainer>
      <GenerateButton>Generate</GenerateButton>
    </Container>
  )
}

export default index
