import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { HeaderContainer, ArticleListItem } from '../components/containers'
import { FancyButton } from '../components/buttons'

const Thanks = ({ data }) => {
    const { allMarkdownRemark } = data;
    const article = allMarkdownRemark.edges[0].node;
    console.log(article);
    return (
      <Layout>
        <HeaderContainer
          header="Got it, thanks!"
          subheader="We'll get back to you soon. In the meantime, take a minute and learn something from our knowledge base."
          bg="light"
        />
        <ArticleListItem
          title={article.frontmatter.title}
          slug={article.frontmatter.slug}
          excerpt={article.excerpt}
          date={article.frontmatter.date}
        />
        <FancyButton as={Link} className="d-block mx-auto">All articles</FancyButton>
      </Layout>
    )
}

export default Thanks

export const query = graphql`
  query SingleBlogQuery {
    allMarkdownRemark(limit: 1) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`