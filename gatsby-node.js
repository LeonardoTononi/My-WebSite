const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const resultBlog = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                slug
                title
                date(locale: "")
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
              id
              frontmatter {
                slug
                title
                date(locale: "")
              }
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

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 10,
    pathPrefix: '/blog',
    component: path.resolve(`./src/templates/Blog/index.js`),
  });

  const blogPostTemplate = path.resolve(`./src/templates/BlogPost/index.js`);
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `blog/${post.node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        id: post.node.id,
        title: post.node.title,
        previous,
        next,
      },
    });
  });

  const projects = resultProject.data.allMarkdownRemark.edges;
  // Create projects pages.
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
