import React from 'react'
import './CalendarView.css'

const CalendarView = () => {
     const appointments = {
    25: ['08:00', '09:00', '10:00'],  
    26: ['08:00', '09:00', '10:00'],
    27: ['12:00', '—', '13:00'],
    28: ['10:00', '13:00', '—'],
    29: ['—', '14:00', '16:00'],
    30: ['12:00', '14:00', '15:00'],
    31: ['10:00', '10:00', '11:00']
  };
  return (
    <div className='whole'>
       <div className="calendar-view">
      <h2>October 2021</h2>
      
      <table className="calendar-grid">
        <thead>
          <tr>
            {['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {[25, 26, 27, 28, 29, 30, 31].map(day => (
              <td key={day}>
                <div className="day-number">{day}</div>
                {appointments[day]?.map((time, index) => (
                  <div key={index} className={`appointment-time ${time === '—' ? 'empty' : ''}`}>
                    {time}
                  </div>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className="calendar-appointments">
        <div className="appointment-card">
          <h3>Dentist</h3>
          <p>Dr. Michael Chen</p>
          <div className="appointment-time">09:00 AM</div>
        </div>
        <div className="appointment-card">
          <h3>Physiotherapy Appointment</h3>
          <p>Dr. Emily Wilson</p>
          <div className="appointment-time">11:00 AM</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CalendarView
