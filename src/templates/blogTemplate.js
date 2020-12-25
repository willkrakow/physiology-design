import React from "react"
import { graphql } from "gatsby"
import { SectionText } from '../components/typography'
import Layout from '../components/layout'
import { HeaderContainer } from '../components/containers'
import { Container } from "react-bootstrap"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <HeaderContainer
        header={frontmatter.title}
        subheader={frontmatter.date}
        bg="light"
      />
      <Container className="w-50">
        <SectionText
          className="text-dark"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
