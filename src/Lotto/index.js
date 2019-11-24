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
  display: flex;
  justify-content: center;
  margin: 10px;
`
const GenerateButton = styled.button`
  background: blueviolet;
  color: white;
`

// 1) Get Number of Balls
// 2) Get Range# of Balls
// 3) Generate Balls ==>
// 3a)

function getRandomNumber(max) {
  console.log(max)
  return Math.floor(Math.random() * max + 1)
}

function generateBalls(maxBalls, maxNum) {
  let ballsArray = []
  for (let i = 0; i < maxBalls; i++) {
    ballsArray.push(<Ball value={getRandomNumber(maxNum)} key={i} />)
  }
  return ballsArray
}

function index({ title, numBalls, maxNum }) {
  return (
    <Container>
      <Title>{title}</Title>
      <BallContainer>{generateBalls(numBalls, maxNum)}</BallContainer>
      <GenerateButton>Generate</GenerateButton>
    </Container>
  )
}

export default index
