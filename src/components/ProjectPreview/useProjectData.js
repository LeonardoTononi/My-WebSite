import { useStaticQuery, graphql } from 'gatsby';
import { projects } from '../../data/projects';

export const useProjectData = () => {
  const data = useStaticQuery(graphql`
    query {
      BestfivePhone: file(relativePath: { eq: "bestfive-3iphone.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      WeLearn: file(relativePath: { eq: "welearn-3mock.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return projects(
    data.BestfivePhone.childImageSharp.fluid,
    data.WeLearn.childImageSharp.fluid
  );
};
