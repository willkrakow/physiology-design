import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { SectionTitle, SectionText } from './typography'
import moment from 'moment'
import { FancyLink } from './buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

export default function ArticleListItem({ title, date, excerpt, image, slug, ...props }) {
return (
<Row className="w-100 my-3">
  <Col xs={12} md={3}>
    <SectionText className="text-start text-secondary">
      {moment(date).format("MMMM D")}
    </SectionText>
  </Col>
  <Col xs={12} md={9}>
    <div>
      <SectionTitle className="text-start">
        {title}
      </SectionTitle>
      <SectionText className="text-start">
        {excerpt}
        <strong>
          <span className="text-warning"> | </span>
          <FancyLink
            as={Link}
            to={slug}
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
)}

ArticleListItem.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    image: PropTypes.string,
}