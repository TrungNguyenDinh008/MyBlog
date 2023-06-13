import * as React from "react";
import { title, fence } from "./layout.module.css";

const PageTitle = ({ pageTitle }) => {
  return (
    <>
      <hr className={fence}></hr>
      <h1 className={title}>{pageTitle}</h1>
      <hr className={fence}></hr>
    </>
  );
};


export default PageTitle