import React from "react"

const Project = ({ text, tags }) => {
  return (
    <section>
      <p>{text}</p>
      <details>
        {tags.map(tag => (
          <p># {tag}</p>
        ))}
      </details>
      <di>
        <a href="">Github</a>
        <a href="">www</a>
      </di>
    </section>
  )
}

export default Project
