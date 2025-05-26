import body_img from '../assets/body.png'
import activity_img from '../assets/activity.png'
import './Dashboard.css'
import lungs from '../assets/lungs.png'
import tooth from '../assets/tooth.png'
import bone from '../assets/zeroa.png'

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Search */}
      <div className="search">
        <input type="text"
         placeholder="Search..." />

      </div>

      {/* Main Content */}
      <div className="content">
        {/* Body Image */}
        {/* this is right col of the flex  */}
        <div className="body">
          <img src={body_img} alt="Body health indicators" />
        </div>

        {/* Health Status */}
        {/* this should be left col of the flex  */}
        <div className="status">
          <div className="card lungs">
            <div className="card-header">
              <img src={lungs} alt="Lungs" className="card-icon" />
              <h3>Lungs</h3>
            </div>
            <p className="card-date">26 Oct 2021</p>
            <div className="status-bar warning"></div>
          </div>
          
          <div className="card teeth">
            <div className="card-header">
              <img src={tooth} alt="Teeth" className="card-icon" />
              <h3>Teeth</h3>
            </div>
            <p className="card-date">26 Oct 2021</p>
            <div className="status-bar healthy"></div>
          </div>
          
          <div className="card bone">
            <div className="card-header">
              <img src={bone} alt="Bone" className="card-icon" />
              <h3>Bone</h3>
            </div>
            <p className="card-date">26 Oct 2021</p>
            <div className="status-bar warning"></div>
          </div>
        </div>
      </div>

      {/* Activity */}
      <div className="activity">
        <h2>Activity</h2>
        <div className="activity-content">
          <p>3 appointments this week</p>
          <img src={activity_img} alt="Weekly activity" />
        </div>
      </div>
    </div>
  )
}
export default Dashboard
