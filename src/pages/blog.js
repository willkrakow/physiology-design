import React from 'react'
import Styled from 'styled-components'
import { FancyHeader, FancySubheader } from '../components/typography'
import { FancyContainer } from '../components/containers'
import Layout from '../components/layout'

// import { graphql } from 'gatsby'

export default function Blog({data}) {

    return (
      <Layout>
        <FancyContainer className="justify-content-center w-50" height={"auto"}>
          <FancyHeader className="text-dark">The Ph. D. Blog</FancyHeader>
          <FancySubheader className="text-secondary">
            All the exercise physiology you never knew you needed to know.
          </FancySubheader>
        </FancyContainer>
      </Layout>
    )
}

// export const query = graphql`

// `