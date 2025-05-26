import './App.css'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import CalendarView from './components/CalendarView/CalendarView'
import UpcomingSchedule from './components/UpcomingSchedule/UpcomingSchedule'

const App = () => {
  return (
   <div className='container'>
   <Navbar />
    <Dashboard />
   <div>
    <CalendarView />
    <UpcomingSchedule />
   </div>
   </div>
  )
}

export default App
