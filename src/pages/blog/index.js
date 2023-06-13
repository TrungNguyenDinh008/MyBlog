import * as React from "react";
import Layout from "../../components/layout/layout";
import Seo from "../../components/seo/seo";
import { containerCenter } from "../../components/layout/layout.module.css";
import { graphql, Link } from "gatsby";
import PageTitle from "../../components/layout/title";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <PageTitle pageTitle="BLOG"/>
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
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {eq: "blog"}}}
  ) {
    nodes {
      excerpt
      id
      frontmatter {
        slug
        author
        date(formatString: "DD-MM-YYYY")
        title
      }
    }
  }
}
`;
export default BlogPage;
