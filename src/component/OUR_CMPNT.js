import React from "react";
// import PropTypes from "prop-types";
const OUR_CMPNT = (props) => {
  return (
    <div
      className={`Principale_DIV ${
        props.featured ? "Principale_DIV_Featured" : ""
      }`}
    >
      <div className="left">
        <img src={props.img} alt="" />
      </div>

      <div className="middle">
        <div className="middle_high">
          <p>{props.one}</p>
          {props.news && <p>New</p>}
          {props.featured && <p>Featured</p>}
        </div>
        <div className="title">
          <p>{props.job}</p>
        </div>

        <div className="middle_low">
          <p>{props.date}</p>
          <p>{props.time}</p>
          <p>{props.place}</p>
        </div>
      </div>

      <div className="right">
        <p>
          {props.skill.join(", ")} {props.tools.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default OUR_CMPNT;
