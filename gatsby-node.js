const { projects } = require('./src/data/projects');
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/BlogPost/index.js`);
  const resultBlog = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { project: { eq: false } } }
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

  const resultProject = await graphql(
    `
      {
        allMarkdownRemark(filter: { frontmatter: { project: { eq: true } } }) {
          edges {
            node {
              fields {
                slug
              }
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
                    fluid {
                      src
                    }
                  }
                }
              }
              rawMarkdownBody
            }
          }
        }
      }
    `
  );

  if (resultBlog.errors) {
    throw resultBlog.errors;
  }

  // Create blog posts pages.
  const posts = resultBlog.data.allMarkdownRemark.edges;
  const projects = resultProject.data.allMarkdownRemark.edges;

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

  projects.forEach((project, index) => {
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;

    createPage({
      path: `project/${project.node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        slug: project.node.frontmatter.slug,
        id: project.node.id,
        previous,
        next,
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
