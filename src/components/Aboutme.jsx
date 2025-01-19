import React from "react";

const Aboutme = () => {
  return (
    <section className="aboutme-section">
      <div className="info-about-me">
        <div>
          <div className="aboutme-section-flex">
            <div>
              <p className="hey-there">Hey there,</p>
              <h2 className="heading-animation">I'm MEHAK KANYAL</h2>
              <p className="aboutme-para">
                Hi there! I’m a pre-final year Computer Science student at{" "}
                <span className="trent-link">
                  <a
                    href="https://www.chitkara.edu.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="underlineHoverEffect-2"
                  >
                    Chitkara University,Punjab
                  </a>
                </span>
                . My academic journey reflects a steadfast commitment to
                excellence, earning me recognition for outstanding performance
                year after year.
                <br />
                <br />
                With a strong foundation in{" "}
                <span className="bold-text">
                  Java , C , C++, Web Technologies
                </span>{" "}
                and{" "}
                <span className="bold-text">
                  Operating System, DBMS, Computer Network
                </span>
                . My experience includes leading projects and collaborating
                effectively within teams to achieve high-quality results on
                time.
                <br />
                <br />
                Explore my work to see how I leverage my skills to create
                innovative solutions and drive success in every project.
              </p>
            </div>
            <div>
              <img
                src={require("../images/mehak.jpg")}
                alt="My Image"
                className="my-image-main-page image-animation"
              />
            </div>
          </div>
          <div className="buttons">
            <a href="https://drive.google.com/file/d/1uMguLFYpOMs1JsGjGZSrRQcqLHyruFXe/view?usp=drive_link">
              <button
                type="submit"
                name="submit"
                value="submit"
                className="button-52 appear"
              >
                Download Resume
              </button>
            </a>
            <a
              href="https://github.com/mehakkanyal16"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="submit"
                name="submit"
                value="submit"
                className="button-52 appear"
              >
                Visit GitHub
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/mehakkanyal"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="submit"
                name="submit"
                value="submit"
                className="button-52 appear"
              >
                LinkedIn Profile
              </button>
            </a>
          </div>
          <p className="impact-line">
            Whether it's
            <br />
            <span className="software-impact-line">
              {" "}
              Software development, problem-solving, or team collaboration,
            </span>
            <br />
            I'm ready to make a difference in the world of technology!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
