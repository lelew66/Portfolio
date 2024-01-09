import React from 'react'
import "./skills.css"
import Frontend from "./Frontend.jsx"
import Backend from "./Backend.jsx"

const Skill = () => {
  return (
    <section className="siklls section" id="skills">
      <h2 className="section__titile">Skills</h2>
      <span className="section_subtitle">My technical level </span>

      <div className="skills_container container grid">
        <Frontend />

        <Backend />
      </div>

    </section>
  )
}

export default Skill
