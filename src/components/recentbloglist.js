import * as React from "react";
import { gridBox } from "./recentbloglist.module.css";
import RecentBlogLeft from "./recentblogleft";
import RecnetBlogRight from "./recentblogright";

const BlogList = () => {
  return (
    <div className={gridBox}>
      <RecentBlogLeft/>
      <RecnetBlogRight/>
    </div>
  );
};
export default BlogList;
