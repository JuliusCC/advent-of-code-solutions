import React, { Component } from 'react'
import { API_URL } from '../utils/constants'
import DaySelector from '../components/DaySelector'
import styled from 'styled-components'

const Grid = styled.div``

class SolutionForm extends Component {
  constructor(props) {
    super(props)
    this.state = { availableDays: [] }
    fetch(API_URL + '/getDays')
      .then(response => response.json())
      .then(response => this.setState({ availableDays: response.days }))
  }

  render() {
    return (
      <Grid>
        <DaySelector availableDays={this.state.availableDays} />
      </Grid>
    )
  }
}

export default SolutionForm
