/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styled from 'styled-components'
import { Ball } from './Ball'

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

function generateBalls(max) {
  let ballsArray = []
  for (let i = 0; i < max; i++) {
    ballsArray.push(<Ball value="4" key={i} />)
  }
  return ballsArray
}

function index({ title, numBalls }) {
  return (
    <Container>
      <Title>{title}</Title>
      <BallContainer>
        {/* <Ball value="4"></Ball> */}
        {generateBalls(6)}
      </BallContainer>
      <GenerateButton>Generate</GenerateButton>
    </Container>
  )
}

export default index
