import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Me404Image from '../assets/404-me.png';

const Text = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;

  h1 {
    line-height: 3rem;
  }
`;

const Container = styled.div`
  display: grid;
  padding: 20px;
  max-width: 1020px;
  margin: 0 auto;

  img {
    width: 100%;
    max-width: 400px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 60px;

    ${Text} {
      order: 2;
      place-self: center;
    }
  }
`;

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Container>
        <Text>
          <h1>Ooops, page not found!</h1>
          <p>
            You just hit a route that doesn&#39;t exist... or something is
            broken...or you are trying to cheat.
          </p>
        </Text>

        <img src={Me404Image} />
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
