import * as React from "react"
import { containerCenter } from "../components/layout/layout.module.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = () => {
  return (
    <main className={containerCenter}>
      <div>
        <h1 style={{
          position: "relative",
          top: "50px",
          zIndex: "2",
          fontSize: "5em"
        }}>404 PAGE</h1>
        <p style={{
          position: "relative",
          top: "70px",
          fontSize: "3em",
          zIndex: "2"
        }}>Oops! Looks like you got lost to somewhere</p>
      <StaticImage src="../images/error.jpg" alt="space" style={{
        borderRadius: "50%"
      }}></StaticImage>
      <p style={{
        fontSize: "2em"
      }}>You should go back <Link to="/">Home</Link></p>
      </div>
      
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
