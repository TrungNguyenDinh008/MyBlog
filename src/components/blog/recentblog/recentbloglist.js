import * as React from "react";
import { gridBox } from "./recentbloglist.module.css";
import RecentBlogLeft from "./recentblogleft";
import RecnetBlogRight from "./recentblogright";
import RecentBlogBottom from "./recentblogbottom";

const BlogList = () => {
  return (
    <>
      <div className={gridBox}>
        <RecentBlogLeft />
        <RecnetBlogRight />
      </div>
      <RecentBlogBottom />
    </>
  );
};
export default BlogList;
