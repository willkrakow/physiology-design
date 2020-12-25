import { graphql } from 'gatsby'
import React from 'react'
import { FancyContainer, HeaderContainer } from '../components/containers'
import Layout from '../components/layout'
import ArticleListItem from '../components/article-list-item'

export default function Blog({data}) {
    const { allMarkdownRemark } = data;
    console.log(allMarkdownRemark.edges);
    return (
      <Layout>
        <HeaderContainer header="The Ph. D." subheader="Everything you never knew you needed to know about excercise fizz." bg="light" />
        <FancyContainer
          className="justify-content-center w-100"
          height={"auto"}
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
        </FancyContainer>
      </Layout>
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