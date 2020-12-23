import React from 'react'
import { FancyHeader, FancySubheader, SectionText, SectionTitle } from '../components/typography'
import { FancyContainer } from '../components/containers'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import { FancyLink } from '../components/buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'


// import { graphql } from 'gatsby'

export default function Blog({data}) {
    const { allMarkdownRemark } = data;
    console.log(allMarkdownRemark);
    return (
      <Layout>
        <FancyContainer className="justify-content-center w-50" height={"auto"}>
          <FancyHeader className="text-dark">The Ph. D. Blog</FancyHeader>
          <FancySubheader className="text-secondary">
            All the exercise physiology you never knew you needed to know.
          </FancySubheader>
        </FancyContainer>
        <FancyContainer className="justify-content-center w-100" height={"auto"}>
          {allMarkdownRemark.edges.map((post, index) => (
            <Row key={index} className="w-100 my-3">
              <Col xs={12} md={3}>
                <SectionText className="float-end d-inline text-end text-secondary">
                  {moment(post.node.frontmatter.date).format("MMMM D")}
                </SectionText>
              </Col>
              <Col xs={12} md={9}>
                <div>
                  <SectionTitle className="text-left d-inline w-50" left>
                    {post.node.frontmatter.title}
                  </SectionTitle>
                  <SectionText className="text-left d-inline float-start">
                    {post.node.excerpt}
                    <strong>
                      <span class="text-warning"> | </span>
                      <FancyLink
                        as={Link}
                        to={post.node.frontmatter.slug}
                        className="text-dark"
                      >
                        Read more{" "}
                        <FontAwesomeIcon
                          icon={faLongArrowAltRight}
                          className="text-warning"
                        />
                      </FancyLink>
                    </strong>
                  </SectionText>
                </div>
              </Col>
            </Row>
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