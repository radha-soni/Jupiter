import React, { useState, useEffect } from "react";
import "./sidenav.css";
export default function Sidenav({
  handleSettings,
  handleNotification,
  handleTask,
  taskOptions,
  taskList,
}) {
  const [profileOptions, setProfileOptions] = useState(false);

  function handleProfile() {
    setProfileOptions(!profileOptions);
  }
  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <div className="sidebar">
      <button onClick={handleProfile} className="profile">
        Profile
      </button>
      {profileOptions && (
        <ul className="profile-options">
          <li className="profile-li" onClick={handleSettings}>
            <i className="fa fa-fighter-jet" aria-hidden="true"></i>
            &nbsp;Setting
          </li>
          <li className="profile-li" onClick={handleNotification}>
            <i className="fa fa-fighter-jet" aria-hidden="true"></i>
            &nbsp;Notification
          </li>
        </ul>
      )}

      <button onClick={handleTask} className="profile">
        My Task
      </button>

      {taskOptions &&
        taskList &&
        taskList.map((element, index) => {
          console.log(index + 1);
          return (
            <ul key={index} className="profile-options">
              <li className="profile-li">
                <i className="fa fa-fighter-jet" aria-hidden="true"></i>
                &nbsp;Task {index + 1}
              </li>
            </ul>
          );
        })}
    </div>
  );
}
