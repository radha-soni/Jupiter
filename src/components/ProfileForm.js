import React, { useState, useEffect } from "react";
import "./ProfileForm.css";
import Datepicker from "./Datepicker";
export default function ProfileForm() {
  const [inputs, setInputs] = useState({
    firstName: "",
    dob: "",
    profession: "",
    designation: "",
  });

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  useEffect(() => {
    setInputs((inputs) => ({
      ...inputs,
      dob: selectedDate,
    }));
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  function handleChange(event) {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    let documentData = JSON.parse(localStorage.getItem("document"));
    localStorage.setItem(
      "document",
      JSON.stringify({ ...documentData, profileData: inputs })
    );
    alert("Your data submitted successfully");
  }
  function handleCancel() {
    console.log("clicked");
    setInputs({ firstName: "", dob: "", profession: "", designation: "" });
  }
  useEffect(() => {
    let documentData = JSON.parse(localStorage.getItem("document"));
    if (localStorage.getItem("document") && documentData.profileData) {
      setInputs({
        firstName: documentData.profileData.firstName,
        dob: documentData.profileData.dob,
        profession: documentData.profileData.profession,
        designation: documentData.profileData.designation,
      });
    } else {
      setInputs({ firstName: "", dob: "", profession: "", designation: "" });
    }
  }, []);
  return (
    <div className="profile-container">
      <div className="profile-form">
        <div className="labels">
          <label>Name</label>
          <label>DOB</label>
          <label>Profession</label>
          <label>Designation</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            name="firstName"
            maxLength={30}
            value={inputs.firstName || ""}
            onChange={handleChange}
            autoFocus
          />

          <Datepicker
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />

          <input
            type="text"
            name="profession"
            maxLength={30}
            value={inputs.profession || ""}
            onChange={handleChange}
            autoFocus
          />
          <input
            type="text"
            name="designation"
            maxLength={30}
            value={inputs.designation || ""}
            onChange={handleChange}
            autoFocus
          />
        </div>
      </div>
      <div className="submit">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}
