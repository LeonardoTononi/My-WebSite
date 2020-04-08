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
    </section>
  )
}

export default Project
