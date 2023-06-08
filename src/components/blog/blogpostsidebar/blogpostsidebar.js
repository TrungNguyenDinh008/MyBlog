import * as React from "react";
import BlogListItem from "../recentblog/bloglistitem";
import { useStaticQuery, graphql } from "gatsby";
import { flexBox } from "./blogpostsidebar.module.css";

const BlogPostSideBar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {frontmatter: {date: DESC}}) {
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
                gatsbyImageData (
                  width: 1200
                )
              }
            }
          }
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;
  return (
    <div className={flexBox}>
      {posts.map((post) => {
        return <BlogListItem post={post} key={post.id} />;
      })}
    </div>
  );
};

export default BlogPostSideBar;