import { graphql } from 'gatsby'
import React from 'react'
import { HeaderContainer, ArticleListItem } from '../components/containers'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from 'react-bootstrap'

export default function Blog({data}) {
    const { allMarkdownRemark } = data;
    console.log(allMarkdownRemark.edges);
    return (
      <>
      <SEO title="The Ph. D. Blog" />
      <Layout>
        <HeaderContainer header="The Ph. D." subheader="Everything you never knew you needed to know about excercise fizz." bg="light" />
        <Container
          className="justify-content-center w-100 py-5"
        >
          {allMarkdownRemark.edges.map((post, index) => (
            <ArticleListItem
              key={index}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              excerpt={post.node.excerpt}
              image={null}
              slug={post.node.frontmatter.slug}
            />
          ))}
        </Container>
      </Layout>
      </>
    )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            slug
            title
            date
          }
          excerpt
        }
      }
    }
  }
`