import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import ProfileForm from "./components/ProfileForm";
import Notification from "./components/Notification";
import Task from "./components/Task";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  const [setting, setSetting] = useState(false);
  const [notification, setNotification] = useState(false);
  const [task, setTask] = useState(false);
  const [details, setDetails] = useState(true);
  const [taskOptions, setTaskOptions] = useState(false);
  const [taskList, setTaskList] = useState([]);

  function handleSettings() {
    setSetting(true);
    setNotification(false);
    setTask(false);
    setDetails(false);
  }
  function handleNotification() {
    setNotification(true);
    setSetting(false);
    setTask(false);
    setDetails(false);
  }
  function handleTask() {
    setTask(true);
    setTaskOptions(!taskOptions);
    setNotification(false);
    setSetting(false);
    setDetails(false);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="profile-info">
        <Sidenav
          handleSettings={handleSettings}
          handleNotification={handleNotification}
          handleTask={handleTask}
          taskOptions={taskOptions}
          taskList={taskList}
        />
        {details && <ProfileDetails />}

        {setting && <ProfileForm />}
        {notification && <Notification />}
        {task && <Task taskList={taskList} setTaskList={setTaskList} />}
      </div>
    </div>
  );
}

export default App;
