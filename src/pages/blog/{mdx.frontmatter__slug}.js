import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { flexBox } from "../../components/post.module.css"
import BlogPostSideBar from "../../components/blogpostsidebar";


const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  console.log(data.mdx.frontmatter.hero_image_alt);
  return (
    <Layout pageTitle="MY BLOG">
      <div className={flexBox}>
        <div>
           <BlogPostSideBar/>
        </div>
        <div>
          <h1>{data.mdx.frontmatter.title}</h1>
          <h2>Date: {data.mdx.frontmatter.date}</h2>
          <h2>Author: {data.mdx.frontmatter.author}</h2>
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
            gatsbyImageData
          }
        }
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
      }
    }
  }
`;
