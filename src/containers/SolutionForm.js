import React, { Component } from 'react'
import { API_URL } from '../utils/constants'
import DaySelector from '../components/DaySelector'
import PartPicker from '../components/PartPicker'
import styled from 'styled-components'

const Grid = styled.div`
	display: grid;
`

class SolutionForm extends Component {
	constructor(props) {
		super(props)

		console.log('API_URL: ' + API_URL)

		this.state = { availableDays: [], availableParts: [] }
		try {
			fetch(API_URL + '/getDays')
				.then(response => response.json())
				.then(json => {
					this.setState({
						availableDays: json.days,
						availableParts: this.state.availableParts
					})
					if (json.days && json.days[0]) this.updatePartPicker(json.days[0])
				})
		} catch (err) {
			console.error(err)
		}
	}

	updatePartPicker = day => {
		fetch(`${API_URL}/getParts/${day}`)
			.then(response => response.json())
			.then(json =>
				this.setState({
					availableParts: json.parts,
					availableDays: this.state.availableDays
				})
			)
	}

	updateSolution = part => {
		console.log({ part })
	}

	render() {
		return (
			<Grid>
				<DaySelector
					availableDays={this.state.availableDays}
					propagateChange={this.updatePartPicker}
				/>
				<PartPicker
					availableParts={this.state.availableParts}
					propagateChange={this.updateSolution}
				/>
			</Grid>
		)
	}
}

export default SolutionForm
