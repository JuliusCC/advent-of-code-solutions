import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	grid-column: 2;
`

const PartPicker = ({ availableParts, propagateChange }) => {
	const multiple = availableParts.map((part, index) => (
		<label key={index} htmlFor={index}>
			{part}:<input
				type="radio"
				name="part"
				value={part}
				id={index}
				onChange={e => {
					const val = Number(e.target.value)
					propagateChange(val)
				}}
			/>
		</label>
	))

	const single = <div />

	const none = <div />

	return <Wrapper>{availableParts.length > 1 ? multiple : <div />}</Wrapper>
}

export default PartPicker
