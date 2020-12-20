import React from "react"
import { graphql } from "gatsby"
import { FancyHeader, FancySubheader, SectionText } from '../components/typography'
import Layout from '../components/layout'
import { Container } from "react-bootstrap"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container className="blog-post-container my-5 w-50">
        <div className="blog-post">
          <FancyHeader className="text-dark">{frontmatter.title}</FancyHeader>
          <FancySubheader className="text-dark">
            {frontmatter.date}
          </FancySubheader>
          <SectionText
            className="text-dark"
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
