import * as React from "react";
import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";
import RecentBlogList from "../components/blog/recentblog/recentbloglist";
import AllBlogPosts from "../components/blog/allblogpost/allblogpost";
import PageTitle from "../components/layout/title";
import Newsletters from "../components/layout/newsletters/newsletters"
const IndexPage = () => {
  return (
    <Layout>
      <PageTitle pageTitle="THE BLOG"/>
      <h1>- Recent Blog Posts -</h1>
      <RecentBlogList/>
      <h1>- All Blog Posts -</h1>
      <AllBlogPosts/>
      <Newsletters/>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;
export default IndexPage;


