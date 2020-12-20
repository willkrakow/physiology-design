import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import { FancySubheader } from './typography'

export const StandardIcon = Styled(FontAwesomeIcon)`
    display: block;
    margin: auto;
    transition: transform 0.3s;
`

const IconCol = Styled(Col)`
    border: 0.25em solid rgba(0,0,0,0.0);
    border-radius: 1em;
&:hover {
    border: 0.25em solid #ffc107;
}
`

export default function IconColumn({ name, handle, icon, xs, md, dark}) {
    return (
      <IconCol xs={xs || 10} md={md || 6} className="my-5">
        <Link to={`/goals${handle}`}>
          <StandardIcon
            icon={icon}
            size={"10x"}
            className="text-warning p-2"
          />
          {name ? <FancySubheader className={`text-center mt-2 mx-0 ${dark ? "text-light" : "text-dark"}`}>
            {name}
          </FancySubheader> : null}
        </Link>
      </IconCol>
    )
}

IconColumn.propTypes = {
    name: PropTypes.string,
    handle: PropTypes.string,
    icon: PropTypes.element,
    xs: PropTypes.number,
    md: PropTypes.number,
    dark: PropTypes.bool,
}

IconColumn.defaultProps = {
    xs: 10,
    md: 6,
    dark: false,
}