import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	grid-column: span 2;
	padding: 0;
`

const InputArea = styled.textarea`
	width: 100%;
	boxsizing: border-box;
`

const TextInput = () => {
	return (
		<Wrapper>
			<InputArea />
		</Wrapper>
	)
}

export default TextInput
