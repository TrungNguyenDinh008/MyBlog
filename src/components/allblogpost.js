import * as React from "react";
import BlogListItem from "./bloglistitem";
import { useStaticQuery, graphql } from "gatsby";
import { gridBox } from "./allblogposts.module.css";

const AllBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
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
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  const posts = data.allMdx.nodes.slice(3);
  return (
    <div className={gridBox}>
      {posts.map((post) => {
        return <BlogListItem post={post} key={post.id} />;
      })}
    </div>
  );
};

export default AllBlogPosts;
