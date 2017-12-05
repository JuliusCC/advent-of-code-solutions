import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 30px;
  font-family: sans-serif;
`

const Explenation = styled.p``

const Header = () => {
  return (
    <div>
      <Title>Advent of code solutions</Title>
      <Explenation>
        This is the place for you who want to test your solution of advent of
        code for when you can't get it right.
      </Explenation>
    </div>
  )
}

export default Header
