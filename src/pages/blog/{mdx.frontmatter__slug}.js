import * as React from "react";
import Layout from "../../components/layout/layout";
import Seo from "../../components/seo/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { flexBox, postTitle, postInfo  } from "../../components/post/post.module.css"
import BlogPostSideBar from "../../components/blog/blogpostsidebar/blogpostsidebar";


const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  console.log(data.mdx.frontmatter.hero_image_alt);
  return (
    <Layout pageTitle="MY BLOG">
      <div className={flexBox}>
        <div>
          <h3>Another Posts</h3>
           <BlogPostSideBar/>
        </div>
        <div>
          <h1 className={postTitle}>{data.mdx.frontmatter.title}</h1>
          <h2 className={postInfo}>Date: {data.mdx.frontmatter.date}</h2>
          <h2 className={postInfo}>Author: {data.mdx.frontmatter.author}</h2>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>
            Photo Credit:{" "}
            <a href={data.mdx.frontmatter.hero_image_credit_link}>
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
          {children}
        </div>
      </div>
    </Layout>
  );
};
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        author
        date(formatString: "DD-MM-YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData (
              width: 900
            )
          }
        }
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
      }
    }
  }
`;
