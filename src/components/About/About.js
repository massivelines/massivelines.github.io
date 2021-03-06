import React from 'react';

import skills from '../../data/skills';

const About = () => (
  <section id="about" className="about">
    <div className="text">
      <div className="section-title">About</div>
      <p>
        I am a front end developer and web designer based in Dallas, Texas. I
        take pride in code that is easy to read, well documented, and efficient
        behind the scenes. I always strive to have modern, pixel perfect, and
        user-friendly UX and UI designs.
      </p>
      <p>
        Most of my coding skills and knowledge are self-taught through online
        training courses, I change providers as needed for new challenges and
        always strive to learn new tech, workflows, and best practices.
      </p>
      <p>
        I love anything related to arts or pixels. My background before learning
        to code was in animation and graphic design.
      </p>
    </div>

    <div className="skills-container">
      <div className="title">
        Here are a few things I&apos;m experienced with:
      </div>
      {skills.map(skillObj => (
        <div key={skillObj.title} className="skill-group-container">
          <div className="group-title">{skillObj.title}</div>
          <div className="skills-icons-container">
            {/* map through skill icons */}
            {skillObj.skills.map(skill => (
              <div key={skill.title} className="skill">
                <div className="icon-container">
                  <img src={skill.icon} alt={skill.title} />
                </div>
                <div className="skill-title">{skill.title}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default About;
