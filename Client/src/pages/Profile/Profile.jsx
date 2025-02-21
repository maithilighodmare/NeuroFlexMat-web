import React from "react";
import { FaSearch, FaBell, FaEnvelope, FaCog, FaSignOutAlt, FaUsers, FaChartLine } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">HRdream</h2>
        <ul className="menu">
          <li className="active"><FaChartLine /> Dashboard</li>
          <li><FaUsers /> Applicant Tracker</li>
          <li><FaUsers /> People</li>
          <li><FaUsers /> Who’s Away</li>
          <li><FaUsers /> Reflect</li>
        </ul>
        <div className="sidebar-footer">
          <button><FaCog /> Settings</button>
          <button><FaSignOutAlt /> Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar */}
        <header className="top-bar">
          <div className="search">
            <FaSearch className="icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="user-info">
            <FaEnvelope className="icon" />
            <FaBell className="icon" />
            <div className="profile">
              <span>Admira Broom</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <section className="dashboard">
          <button className="account-settings">Account settings</button>

          <div className="grid">
            {/* Tasks */}
            <div className="tasks">
              <h3>My tasks</h3>
              <p>2 active tasks</p>
              <ul>
                <li>Interview with developer <span className="due today">Due today</span></li>
                <li>Reflection time <span className="due tomorrow">Tomorrow</span></li>
                <li>Sprint questions preparation <span className="due today">Due today</span></li>
              </ul>
              <a href="#">See all tasks</a>
            </div>

            {/* Info Cards */}
            <div className="info-cards">
              <div className="card blue">Reflection time <h4>10 questions</h4></div>
              <div className="card green">Daily progress <h4>82%</h4></div>
              <div className="card purple">FAQ <h4>Find all answers</h4></div>
            </div>

            {/* Calendar */}
            <div className="calendar">
              <h3>December 2023</h3>
              <div className="dates">
                <span>Sun</span> <span className="active">Mon 3</span> <span>Tue</span> <span>Wed</span> <span>Thu</span> <span>Fri</span> <span>Sat</span>
              </div>
              <h3>Upcoming tasks</h3>
              <ul>
                <li>UX/UI workshop <span>14:00 - 14:45</span></li>
                <li>Interaction design <span>11:00 - 14:45</span></li>
                <li>Team Meeting <span>12:00 - 12:35</span></li>
                <li>User interview <span>16:00 - 17:00</span></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
