import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo";
import { containerLeft } from "../components/layout/layout.module.css";
import PageTitle from "../components/layout/title";
import NewSletters from "../components/layout/newsletters/newsletters";

const AboutPage = () => {
  return (
    <Layout>
      <PageTitle pageTitle="Trung Nguyen" />
      <div className={containerLeft}>
        <div className={containerLeft}>
          <h2>Introduction:</h2>
          <p>
            I'm Trung, an experienced UI designer, I am dedicated to creating
            intuitive and engaging user experiences that meet the needs of my
            clients and their users. I have a strong understanding of design
            principles and a proficiency in design tools, and I am comfortable
            working with cross-functional teams to bring projects to fruition. I
            am confident in my ability to create designs that are both visually
            appealing and functional, and I am always looking for new challenges
            and opportunities to grow as a designer.{" "}
          </p>
        </div>

        <div className={containerLeft}>
          <h2>Skill:</h2>
          <ul>
            <li>
              Extensive experience in UI design, with a strong portfolio of
              completed projects
            </li>
            <li>
              Proficiency in design tools such as Adobe Creative Suite and
              Sketch
            </li>
            <li>
              Excellent visual design skills, with a strong understanding of
              layout, color theory, and typography
            </li>
            <li>
              Ability to create wireframes and prototypes to communicate design
              concepts
            </li>
            <li>
              Strong communication and collaboration skills, with the ability to
              work effectively with cross-functional teams
            </li>
            <li>
              Experience conducting user research and gathering insights to
              inform design decisions
            </li>
            <li>Proficiency in HTML, CSS, and JavaScript</li>
          </ul>
        </div>
        <NewSletters />
        <p>This is not true:)))</p>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo title="About Page" />;
