import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { containerCenter } from "../components/layout.module.css"

const AboutPage = () => {

    return(
        <Layout pageTitle="ABOUT PAGE">
            <div className={containerCenter}>
<h1>Introduction:</h1>
 <p>Hi there! My name is Trung, I'm 15 years old and this is my first blog page. I making this by myself with Gatsby Framework! It's cool, right?</p>


            </div>
        </Layout>
    )
}

export default AboutPage

export const Head = () => <Seo title="About Page"/>