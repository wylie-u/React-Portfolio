import React from "react";
import headshot from "../../images/wylie-headshotcopy.jpg";
import Card from "react-bootstrap/Card";
import "./style.css";

function AboutMe() {
  return (
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-5">
        <Card
          className="headshot-card"
          style={{ border: "none", backgroundColor: "none" }}
        >
          <img src={headshot} alt="headshot" className="wy-image" />
        </Card>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-7">
        <article class="main-content">
          <h2>Hi, I'm Wylie Urig.</h2>
          <p>
            I'm currently living, exploring and creating in Denver, CO. I'm a
            junior .NET full-stack developer looking to grow my skills and break
            a few things along the way. Thanks for looking!{" "}
          </p>
        </article>
      </div>
    </div>
  );
}

export default AboutMe;
