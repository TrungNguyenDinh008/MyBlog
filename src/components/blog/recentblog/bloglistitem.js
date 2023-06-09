import * as React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const BlogListItem = ({ post }) => {
  return (
    <div>
      <GatsbyImage
        image={getImage(post.frontmatter.hero_image)}
        alt={post.frontmatter.hero_image_alt}
      ></GatsbyImage>
      <div>
        <h2>
          {post.frontmatter.author} - {post.frontmatter.date}
        </h2>
        <h1>
          <Link to={`/blog/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
        </h1>
        <p>{post.excerpt}</p>
        <span
          style={{
            borderRadius: "50px",
            color: "purple",
            backgroundColor: "pink",
            padding: "5px 10px",
            display: "inline-block",
          }}
        >
          {post.frontmatter.topic}
        </span>
      </div>
    </div>
  );
};

export default BlogListItem;
