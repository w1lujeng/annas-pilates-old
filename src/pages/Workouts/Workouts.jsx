import React, { Component } from 'react'
import WorkoutsRow from '../../components/WorkoutsRow/WorkoutsRow'
import {Link} from 'react-router-dom';
import { PropTypes } from 'react';

export const Workouts  = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/reformer|mat/)) ? days:
      days.filter(day => day[filter])
  return (
    <div className="workoutsList">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Gym</th>
            <th>Reformer</th>
            <th>Mat</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="workouts">
                Activities
              </Link>
              <Link to="/workouts/reformer">
                Reformer Workouts
              </Link>
              <Link to="/addworkout/mat">
                Mat Workouts
              </Link>
              <li></li>
              <li></li>

            </td>
            
          </tr>
        </thead> 
        <tbody>
          {filteredDays.map((day, i) =>
            <WorkoutsRow key={i}
                            {...day}
            />
            )}
        </tbody>
      </table>
    </div>
  )
}
export default Workouts

