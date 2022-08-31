import React from "react";
import "./style.css";

function Resume() {
  return (
    <div class="container">
      <section class="row">
        <section class="col-sm-12 col-lg-12 resume" id="accordionExample">
          <article class="resume-content">
            <h2>Full-Stack Web Developer</h2>
            <p>
              Devoted, energetic and versatile .NET devleoper with 2+ year's
              experience in full-stack web development and .NET Framework.
              Intrigued by all phases of software development life cycle with
              the willingness to try new things and expand my skillset. Feel
              free to review my resume by clicking{" "}
              <a href="https://docs.google.com/document/d/e/2PACX-1vT-ql7Ml4ABjqrmYriAoyM0ASpgVjwV0sQwU8xFIw-6iUEkiJ5APuCqe9nIo8eoYuPdzv30mNWFkmCB/pub">
                HERE!
              </a>{" "}
            </p>
          </article>
        </section>
      </section>
      <section class="row">
        <section class="col-sm-12 col-lg-12">
          <div class="skills__container">
            <h4>Skills</h4>
            <ul class="main__skills">
              <li class="about__skill">.NET Framework</li>
              <li class="about__skill">C#</li>
              <li class="about__skill">JavaScript</li>
              <li class="about__skill">REST API's</li>
              <li class="about__skill">React</li>
              <li class="about__skill">Xamarin</li>
              <li class="about__skill">MVC</li>
              <li class="about__skill">Object-Oriented Design</li>
              <li class="about__skill">SQL</li>
              <li class="about__skill">Knockout</li>
              <li class="about__skill">Git</li>
              <li class="about__skill">HTML/CSS</li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Resume;
