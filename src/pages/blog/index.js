import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { containerCenter } from "../../components/layout.module.css";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="BLOG PAGE">
      {data.allMdx.nodes.map((post) => (
        <div key={post.id} className={containerCenter}>
          <Link to={`/blog/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
          <p>Date: {post.frontmatter.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo title="Blog Page" />;
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          hero_image_link
          hero_image_alt
          date(formatString: "DD-MM-YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`;
export default BlogPage;
