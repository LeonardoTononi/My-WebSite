const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/BlogPost/index.js`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                image {
                  childImageSharp {
                    fixed {
                      src
                      srcSet
                    }
                    fluid {
                      src
                      srcSet
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  const projectTemplate = path.resolve(`./src/templates/Project/index.js`);

  const projects = [
    {
      title: 'BestFive Bcn',
      name: 'A tourism web app',
      stack: ['JavaScript', 'Firebase', 'Google Maps', 'Google Analytics'],
      demo_url: 'https://bestfivebcn.com/',
      github_url: 'https://github.com/Easaaa/Bestfive-bcn',
      description: 'COMING SOON',
      img: '',
      slug: 'bestfive-bcn',
    },
    {
      title: 'Hotel Vittoria',
      name: 'An business web site',
      stack: ['Gatsby', 'Netlify', 'Google Analytics', 'Google Sheets DB'],
      demo_url: 'https://hotelvittoria.netlify.app/',
      github_url: 'https://github.com/Easaaa/hotel-vittoria-2020',
      description: 'COMING SOON',
      img: '',
      slug: 'hotel-vittoria',
    },
  ];

  projects.forEach((project, index) => {
    createPage({
      path: `project/${project.slug}`,
      component: projectTemplate,
      context: {
        data: project,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
