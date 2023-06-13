import * as React from "react";
import BlogListItem from "./bloglistitem";
import { useStaticQuery, graphql } from "gatsby";


const RecnetBlogRight = () => {
  const data = useStaticQuery(graphql`
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
          topic
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 850)
            }
          }
        }
      }
    }
  }
  `);
  const posts = data.allMdx.nodes.slice(1, 3);
  return (
    <>
      {posts.map((post) => {
        return <BlogListItem post={post} key={post.id} />;
      })}
    </>
  );
};

export default RecnetBlogRight;
