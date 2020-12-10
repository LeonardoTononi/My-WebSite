import React from 'react';
import Layout from '../../components/Layout';
import { ProjectContainer, Row, Content } from './style';

import { VscDebugBreakpointLog } from 'react-icons/vsc';

const DiamondIcon = <VscDebugBreakpointLog />;

const Project = ({ data, pageContext }) => {
  const { description, title } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <ProjectContainer>
        <Row>
          <h5>{description}</h5>
          <h1>{title}</h1>
        </Row>

        <Content
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />

        <Row></Row>
      </ProjectContainer>
    </Layout>
  );
};

export default Project;

export const pageQuery = graphql`
  query ProjectById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        demo_url
        description
        github_url
        slug
        stack
        title
        date(locale: "")
        project
        imagePreview {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      rawMarkdownBody
    }
  }
`;
