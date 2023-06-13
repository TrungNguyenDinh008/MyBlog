import * as React from "react";
import Layout from "../../components/layout/layout";
import PageTitle from "../../components/layout/title";
import { flexBox } from "../../components/project/project.module.css";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import NewSletters from "../../components/layout/newsletters/newsletters";
const ProjectPage = ({ data }) => {
  return (
    <Layout>
      <PageTitle pageTitle="PROJECT"/>
      <h3>List Project</h3>
      <div className={flexBox}>
        {data.allMdx.nodes.map((project) => {
          return (
            <div>
                <GatsbyImage
                  image={getImage(project.frontmatter.hero_image)}
                  alt={project.frontmatter.hero_image_alt}
                />
                <h2>{project.frontmatter.date}</h2>
              <h1>
                <a href={project.frontmatter.link}>
                  {project.frontmatter.title}
                </a>
              </h1>
              <p>{project.excerpt}</p>
            </div>
          );
        })}
      </div>
      <NewSletters/>
    </Layout>
  );
};
export const data = graphql`
query {
  allMdx(
    filter: {frontmatter: {type: {eq: "project"}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    nodes {
      frontmatter {
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
        date(formatString: "DD-MM-YYYY")
        title
        link
      }
      excerpt
    }
  }
}
`;
export default ProjectPage;
