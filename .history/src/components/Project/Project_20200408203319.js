import React from "react"

const Project = ({ text, tags, GitHubLink, LiveLink }) => {
  return (
    <section>
      <p>{text}</p>
      <details>
        {tags.map(tag => (
          <p># {tag}</p>
        ))}
      </details>
      <di>
        <a href={GitHubLink}>Github</a>
        <a href={LiveLink}>www</a>
      </di>
    </section>
  )
}

export default Project
