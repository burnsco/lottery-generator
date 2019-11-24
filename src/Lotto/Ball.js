import React from 'react'
import styled from 'styled-components'

const CustomBall = styled.span`
  height: 35px;
  width: 35px;
  margin: 5px;
  background-color: rgb(84, 216, 113);
  border-radius: 50%;
  display: inline-block;
`

export const Ball = ({ value }) => {
  return (
    <div>
      <CustomBall>
        <small>{value}</small>
      </CustomBall>
    </div>
  )
}
