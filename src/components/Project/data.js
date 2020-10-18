import { useStaticQuery, graphql } from "gatsby"

export const useProjectData = () => {
  const data = useStaticQuery(graphql`
    query {
      IphoneImg: file(relativePath: { eq: "Iphone.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HotelMac: file(relativePath: { eq: "hotel-mac.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const projects = [
    {
      name: "A tourism web app",
      stack: ["JavaScript", "Firebase", "Google Maps", "Google Analytics"],
      demo_url: "https://bestfivebcn.com/",
      github_url: "https://github.com/Easaaa/Bestfive-bcn",
      description: "COMING SOON",
      img: data.IphoneImg.childImageSharp.fluid,
    },
    {
      name: "An business web site",
      stack: ["Gatsby", "Netlify", "Google Analytics", "Google Sheets DB"],
      demo_url: "https://hotelvittoria.netlify.app/",
      github_url: "https://github.com/Easaaa/hotel-vittoria-2020",
      description: "COMING SOON",
      img: data.HotelMac.childImageSharp.fluid,
    },
  ]

  return projects
}
