import * as React from "react"
import Layout from "../components/layout/layout"
import Newsletters from "../components/layout/newsletters/newsletters"
import AllBlogPosts from "../components/blog/allblogpost/allblogpost"


const Newsletter = () => {
return(
    <Layout>
<Newsletters/>
<h3>All Blog Posts</h3>
<AllBlogPosts/>
    </Layout>
)  
}

export default Newsletter
export const Head = () => <Seo title="Newsletter Page" />;