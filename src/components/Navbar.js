import React, { useEffect, useState } from "react";
import "./navbar.css";
export default function Navbar() {
  const [name, setName] = useState("User");
  useEffect(() => {
    let documentData = JSON.parse(localStorage.getItem("document"));
    if (documentData && documentData.profileData.firstName) {
      setName(documentData.profileData.firstName);
    } else {
      setName("User");
    }
  }, []);
  return (
    <div className="topnav">
      <a href="#user">
        <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
        <span>
          <p>{name}</p>
        </span>
      </a>
    </div>
  );
}
