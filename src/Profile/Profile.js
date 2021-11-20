import React from "react";

function Profile(props) {
  const styleObject = {
    textAlign: "center",
    padding: "2em",
    height: "60vh",
    width: "40%",
    border: "3px black solid ",
  };
  const profile_style = {
    display: "flex",
    flexDirection: "rows",
    alignItems: "center",
  };
  const bio_style = {
    padding: "2em",
  };
  const name_job_style = {
    margin: "2em",
  };

  return (
    <div style={styleObject}>
      <div style={profile_style}>
        <div>{props.children}</div>
        <div style={name_job_style}>
          <h3 className={"walid"}>{props.fullName}</h3>
          <h5>{props.Profession}</h5>
        </div>
      </div>

      <p style={bio_style}>{props.bio}</p>
      <button onClick={props.handleName} type="">
        handleName
      </button>
    </div>
  );
}

export default Profile;
