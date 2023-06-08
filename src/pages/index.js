import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import RecentBlogList from "../components/recentbloglist";
import AllBlogPosts from "../components/allblogpost";
const IndexPage = () => {
  return (
    <Layout pageTitle="THE BLOG">
      <h1>Recent Blog Posts</h1>
      <RecentBlogList/>
      <h1>All Blog Posts</h1>
      <AllBlogPosts/>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
