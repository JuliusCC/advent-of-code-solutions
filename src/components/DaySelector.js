import React from 'react'

const DaySelector = ({ availableDays }) => {
  return (
    <select name="day">
      {availableDays.map(day => <option value={day}>Day {day}</option>)}
    </select>
  )
}

export default DaySelector
