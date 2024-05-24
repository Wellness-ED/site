import React from "react";

export const Courses = (props) => {
  return (
    <div id="courses" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Courses</h2>
          <p>
            We run all sorts of courses on health literacy, health education,
             and other fun stuff.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
