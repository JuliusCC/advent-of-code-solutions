import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	max-width: 200px;
	height: 30px;
`

const Submit = ({ onClick }) => <Button onClick={onClick}>Submit</Button>

export default Submit
