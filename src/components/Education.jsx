import React from "react";

const Education = () => {
  return (
    <section className="education-section" id="Education">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Education & Achievement</h1>
      <div className="education-container">
        <div className="education-column">
          <div className="education-card">
            <h2 className="column-title">Education</h2>
            <div className="education-timeline">
              <div className="education-item">
                <div className="timeline-badge">O</div>
                <div className="education-content">
                  <h3 className="school-name">Chitkara University, Punjab</h3>
                  <p className="education-period">2022 - 2026</p>
                  <p className="program-name">
                  B.Tech in Computer Science Engineering 
                    
                  </p>
                  <p className="grades">GPA: 8.51/10.0</p>
                </div>
              </div>
              <div className="education-item">
                <div className="timeline-badge">•</div>
                <div className="education-content">
                  <h3 className="school-name">Nirmal Public School</h3>
                  <p className="education-period">2021 - 2022</p>
                  <p className="program-name">
                    Grade: 12th (Non-Medical) - CBSE
                  </p>
                  <p className="grades">83.2%</p>
                </div>
              </div>
              <div className="education-item">
                <div className="timeline-badge">•</div>
                <div className="education-content">
                  <h3 className="school-name">Nirmal Public School</h3>
                  <p className="education-period">2019 - 2020</p>
                  <p className="program-name">Grade: 10th - CBSE</p>
                  <p className="grades">92.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="achievements-column">
          <div className="achievements-card">
            <h2 className="column-title">Achievements</h2>
            <div className="achievements-timeline">
              <div className="achievements-item">
                <div className="timeline-badge">O</div>
                <div className="achievements-content">
                  <h3 className="achievement-heading">Chitkara University</h3>
                  <ul className="achievement-list">
                    <li>-Consistently maintained a strong academic record, reflecting a dedication to learning and problem-solving.</li>
                    <li>-Content Writer Executive at IE(I) CSE Student chapter</li>
                    
                  </ul>
                </div>
              </div>
              <div className="achievements-item">
                <div className="timeline-badge">O</div>
                <div className="achievements-content">
                  <h3 className="achievement-heading">
                    Extra-Curricular Activities and Awards
                  </h3>
                  <ul className="achievement-list">
                    <li>- Active Participation in various cultural activities as House Captain in Class XI and XII And achieved various merit 
                    certificates. </li>
                    <li>
                      - Led a team to organize the District Level Quiz Competition on Energy Conservation, ensuring smooth execution and high engagement
                    </li>
                    <li>
                      - Actively participated in club events, including hosting and coordinating educational workshops and competitions for peers.

                    </li>
                   
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
