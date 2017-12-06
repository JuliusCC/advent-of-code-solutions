import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	grid-column: 1;
`

const DaySelector = ({ availableDays, propagateChange }) => {
	return (
		<Wrapper>
			<select
				name="day"
				onChange={e => {
					const val = Number(e.target.value)
					propagateChange(val)
				}}
			>
				{availableDays.map((day, index) => (
					<option key={index} value={day}>
						Day {day}
					</option>
				))}
			</select>
		</Wrapper>
	)
}

export default DaySelector
