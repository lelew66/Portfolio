import React from "react";
import "./projects.css";
import Work1 from "../../assets/work1.jpg"
import {motion} from "framer-motion";
const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__titile">Projects</h2>
      <span className="section_subtitle">My currently projects</span>
      <div className="projects_container container grid">

        <motion.div className="projects_content">
          <div className="projects_images">
            <img src={Work1} alt="project images" className="project-image" />
          </div>
          <div className="projects_body">
            <div className="title-box">
            <i class="bx bx-book-alt"></i>
            <h3 className="projects_title">Clawville website</h3>
            </div>
            <p className="projects_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.s</p>
            <div className="projects_skills">
              <span className="projects_skill_name">
                <i class="bx bxs-circle bxs-yellow"></i>JavaScript
              </span>

              <span className="projects_skill_name">
                <i class="bx bxs-circle bxs-red"></i> CSS
              </span>

              <span className="projects_skill_name">
                <i class="bx bxs-circle bxs-green"></i> HTML
              </span>
            </div>
            <div className="btn-box">
            <motion.input
              type="button"
              className="projects_view  btn"
              value="VIEW PROJECT"
              whileHover={{ scale: 1.1 }}
            />
            <motion.input type="button" className="projects_code  btn" value="VIEW CODE" whileHover={{ scale: 1.1 }}/>
          </div>
          </div>
        </motion.div><div className="projects_content">
          <div className="projects_images">
            <img src={Work1} alt="project images" className="project-image" />
          </div>
          <div className="projects_body">
            <div className="title-box">
            <i class="bx bx-book-alt"></i>
            <h3 className="projects_title">Clawville website</h3>
            </div>
            <p className="projects_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.s</p>
            <div className="projects_skills">
              <span className="projects_skill_name">
                <i class="bx bxs-circle bxs-yellow"></i>JavaScript
              </span>

              <span className="projects_skill_name">
                <i class="bx bxs-circle bxs-red"></i> CSS
              </span>

              <span className="projects_skill_name">
                <i class="bx bxs-circle bxs-green"></i> HTML
              </span>
            </div>
            <div className="btn-box">
            <motion.input
              type="button"
              className="projects_view  btn"
              value="VIEW PROJECT"
              whileHover={{ scale: 1.1 }}
            />
            <motion.input type="button" className="projects_code  btn" value="VIEW CODE" whileHover={{ scale: 1.1 }}/>
          </div>
          </div>
        </div>
        <div className="projects_content">
          <div className="projects_images">
            <img src={Work1} alt="project images" className="project-image" />
          </div>
          <div className="projects_body">
            <div className="title-box">
            <i class="bx bx-book-alt"></i>
            <h3 className="projects_title">Clawville website</h3>
            </div>
            <p className="projects_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu morbi placerat.s</p>
            <div className="projects_skills">
              <span className="projects_skill_name">
                <i class="bx bxs-circle bxs-yellow"></i>JavaScript
              </span>

              <span className="projects_skill_name">
                <i class="bx bxs-circle bxs-red"></i> CSS
              </span>

              <span className="projects_skill_name">
                <i class="bx bxs-circle bxs-green"></i> HTML
              </span>
            </div>
            <div className="btn-box">
            <motion.input
              type="button"
              className="projects_view  btn"
              value="VIEW PROJECT"
              whileHover={{ scale: 1.1 }}
            />
            <motion.input type="button" className="projects_code  btn" value="VIEW CODE" whileHover={{ scale: 1.1 }}/>
          </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
