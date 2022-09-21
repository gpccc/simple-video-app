import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/login-form"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <LoginForm />
    </Layout>
  )
}

export default IndexPage