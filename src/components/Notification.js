import React, { useState, useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import "./notification.css";
export default function Notification() {
  const [state, setState] = useState({
    alert: false,
    success: false,
    fail: false,
    block: false,
  });

  function handleChange(event) {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.checked,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    let documentData = JSON.parse(localStorage.getItem("document"));
    localStorage.setItem(
      "document",
      JSON.stringify({ ...documentData, notifyData: state })
    );
    alert("Your data submitted successfully");
  }
  function handleCancel() {
    setState({ alert: false, success: false, fail: false, block: false });
  }

  useEffect(() => {
    let documentData = JSON.parse(localStorage.getItem("document"));
    if (localStorage.getItem("document") && documentData.notifyData) {
      setState({
        alert: documentData.notifyData.alert,
        success: documentData.notifyData.success,
        fail: documentData.notifyData.fail,
        block: documentData.notifyData.block,
      });
    }
  }, []);
  return (
    <div className="notification-container">
      <div className="notification-form">
        <div className="alert-label">
          <label className="label-container">
            <button className="btn-design">
              <i
                className="fa fa-bell fa-2x"
                aria-hidden="true"
                fa-2x="true"
              ></i>
              &nbsp;Send all alerts
            </button>
          </label>
          <label>
            <button className="btn-design">
              <i
                className="fa fa-thumbs-up fa-2x"
                fa-2x="true"
                aria-hidden="true"
              ></i>
              &nbsp;Alert on task success
            </button>
          </label>
          <label>
            <button className="btn-design">
              <i
                className="fa fa-thumbs-down fa-2x"
                aria-hidden="true"
                fa-2x="true"
              ></i>
              &nbsp;failed task
            </button>
          </label>
          <label>
            <button className="btn-design">
              <i
                className="fa fa-ban fa-2x"
                aria-hidden="true"
                fa-2x="true"
              ></i>
              &nbsp;I do not want any alert
            </button>
          </label>
        </div>
        <div className="toggle">
          <Switch
            className="switch-label"
            onChange={handleChange}
            name="alert"
            checked={state.alert}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <Switch
            className="switch-label"
            onChange={handleChange}
            name="success"
            checked={state.success}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <Switch
            className="switch-label"
            onChange={handleChange}
            name="fail"
            checked={state.fail}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <Switch
            className="switch-label"
            onChange={handleChange}
            name="block"
            checked={state.block}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
        <div className="submit-alert">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
