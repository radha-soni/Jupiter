import React, { useState, useEffect } from "react";
import "./task.css";

export default function Task({ taskList, setTaskList }) {
  const [data, setData] = useState({
    source: "",
    checked: false,
    details: "",
    target: "",
  });
  function handleChange(event) {
    event.persist();
    setData((data) => ({
      ...data,
      [event.target.name]:
        event.target.name === "checked"
          ? event.target.checked
          : event.target.value,
    }));
  }
  function handleSubmit(e) {
    setTaskList(taskList.concat(data));
    e.preventDefault();
    let documentData = JSON.parse(localStorage.getItem("document"));
    localStorage.setItem(
      "document",
      JSON.stringify({ ...documentData, taskData: data })
    );
    alert("Your data submitted successfully");
  }
  function handleCancel() {
    console.log("clicked");
    setData({ source: "", checked: false, details: "", target: "" });
  }
  useEffect(() => {
    let documentData = JSON.parse(localStorage.getItem("document"));
    console.log(documentData);
    if (localStorage.getItem("document") && documentData.taskData) {
      setData({
        source: documentData.taskData.source,
        checked: documentData.taskData.checked,
        details: documentData.taskData.details,
        target: documentData.taskData.target,
      });
    } else {
      setData({ source: "", checked: false, details: "", target: "" });
    }
  }, []);
  return (
    <div className="task-container">
      <div className="task-form">
        <div className="task-label">
          <label>Source Name</label>
          <label>Enable Logging</label>
          <label>Provide SQL</label>
          <label>Target Result</label>
        </div>
        <div className="task-source">
          <select
            value={data.source}
            onChange={handleChange}
            name="source"
            className="dropdown-source"
          >
            <option value="none">None</option>
            <option value="Source 1">Source 1</option>
            <option value="Source 2">Source 2</option>
            <option value="Source 3">Source 3</option>
            <option value="Source 4">Source 4</option>
          </select>

          <input
            id="checkbox"
            type="checkbox"
            name="checked"
            className="dropdown-source"
            value={data.name}
            checked={data.checked}
            onChange={handleChange}
          />
          <textarea
            className="dropdown-source"
            name="details"
            value={data.details}
            onChange={handleChange}
          ></textarea>
          <select
            value={data.target}
            onChange={handleChange}
            name="target"
            className="dropdown-source"
          >
            <option value="none">None</option>
            <option value="Target 1">Target 1</option>
            <option value="Target 2">Target 2</option>
            <option value="Target 3">Target 3</option>
            <option value="Target 4">Target 4</option>
          </select>
        </div>
      </div>
      <div className="save">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}
