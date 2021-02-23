import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import LeoImg from '../assets/leo.png';
import CardSeoImg from '../assets/card-seo.png';

const SEO = ({ description, lang, meta, title, location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const microformats = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    url: 'https://www.leonardotononi.com',
  };

  const globalMicroformats = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: site.siteMetadata.title,
    description: site.siteMetadata.description,
    URL: 'https://www.leonardotononi.com',
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `https://www.leonardotononi.com/`,
        },
        {
          property: `og:image`,
          content: CardSeoImg,
        },
        {
          property: `og:url`,
          content: location?.href,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:image`,
          content: CardSeoImg,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(microformats)}</script>
      <script type="application/ld+json">
        {JSON.stringify(globalMicroformats)}
      </script>
      <link
        rel="canonical"
        href="leonardotononi.com"
        data-baseprotocol="https:"
        data-basehost="www.leonardotononi.com"
      />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
