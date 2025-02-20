import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TaskIcon from "@mui/icons-material/Task";

import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className={`profile-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h2 className="logo">NeuroFlex</h2>
        <input type="text" className="search-bar" placeholder="Search" />
        
        <nav className="menu">
         
         <Link to='/'> <button className="menu-item active">
            <FaHome className="menu-icon" /> Home
          </button></Link>
          <button className="menu-item">
            <FaChartLine className="menu-icon" /> Dashboard
          </button>
          <button className="menu-item">
            <FaCalendarCheck className="menu-icon" /> Sessions
          </button>
          <button className="menu-item">
            <FaDumbbell className="menu-icon" /> Exercises
          </button>
          <button className="menu-item">
            <FaFileAlt className="menu-icon" /> Reports
          </button>
          <button className="menu-item">
            <FaUserMd className="menu-icon" /> Physiotherapists
          </button>
          <button className="menu-item">
            <FaCog className="menu-icon" /> Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="profile-header">
          <FaUserCircle className="profile-avatar" />
          <div className="profile-info">
            <h1>Aashvi Tekade</h1>
            <p>NeuroFlex Therapy Participant</p>
          </div>
          <div className="profile-section">
            <IconButton><NotificationsIcon /></IconButton>
            <Avatar alt="User" src="https://via.placeholder.com/40" />
            <Typography variant="body1">Team Neuroflex</Typography>
          </div>
        </Box>

        <Box className="content-container">
          {/* Left Content (Tasks & Calendar) */}
          <Box className="left-section">
            {/* Account Settings */}
            <Box className="account-settings">
              <Button variant="outlined">Account Settings</Button>
            </Box>

            {/* Tasks Section */}
            <Box className="tasks-section">
              <Typography variant="h6">My Tasks</Typography>
              <Typography variant="body2">2 active tasks</Typography>
              <Card className="task-card">
                <Typography><b>Admira</b> • Check patitent 1<span className="due today">Due today</span></Typography>
                <Typography><b>Admira</b> • Reflection Time <span className="due tomorrow">Tomorrow</span></Typography>
                <Typography><b>Admira</b> • check progress <span className="due today">Due today</span></Typography>
              </Card>
              <Typography className="see-all-tasks">See all tasks</Typography>
            </Box>

            {/* Calendar Section */}
            <Box className="calendar-container">
              <Typography variant="h6">December 2023</Typography>
              <Box className="calendar">
                <Typography className="calendar-date selected">Mon 3</Typography>
                <Typography className="calendar-date">Tue 4</Typography>
                <Typography className="calendar-date">Wed 5</Typography>
                <Typography className="calendar-date">Thu 6</Typography>
                <Typography className="calendar-date">Fri 7</Typography>
              </Box>
              <Typography className="see-schedule">See the entire schedule</Typography>
            </Box>
          </Box>

          {/* Right Content (Info Cards) */}
          <Box className="right-section">
            <Card className="info-card blue">
              <Typography className="card-title">Reflection Time</Typography>
              <Typography className="card-subtitle">10 Questions</Typography>
            </Card>
            <Card className="info-card green">
              <Typography className="card-title">Daily Progress</Typography>
              <Typography className="card-subtitle">82%</Typography>
            </Card>
            <Card className="info-card purple">
              <Typography className="card-title">FAQ</Typography>
              <Typography className="card-subtitle">Find all the answers</Typography>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
