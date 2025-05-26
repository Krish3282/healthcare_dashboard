import React from 'react'
import './UpcomingSchedule.css'


const UpcomingSchedule = () => {
    const appointments = [
    {
      day: 'Thursday',
      items: [
        {
          title: 'Health checkup complete',
          time: '11:00 AM',
          type: 'checkup'
        },
        {
          title: 'Ophthalmologist',
          time: '14:00 PM',
          type: 'specialist'
        }
      ]
    },
    {
      day: 'Saturday',
      items: [
        {
          title: 'Cardiologist',
          time: '12:00 AM',
          type: 'specialist'
        },
        {
          title: 'Neurologist',
          time: '16:00 PM',
          type: 'specialist'
        }
      ]
    }
  ];
  return (
    <div>
      
        <div className="upcoming-schedule">
      <h2 className="section-title">The Upcoming Schedule</h2>
      
      {appointments.map((group, index) => (
        <div key={index} className="schedule-group">
          <h3 className="group-title">On {group.day}</h3>
          <div className="appointments-row">
            {group.items.map((appointment, idx) => (
              <div key={idx} className={`appointment-card ${appointment.type}`}>
                <div className="card-header">
                  <h4 className="appointment-title">{appointment.title}</h4>
                  <span className="appointment-time">{appointment.time}</span>
                </div>
                {appointment.type === 'specialist' && (
                  <div className="specialist-indicator">Specialist Visit</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default UpcomingSchedule
