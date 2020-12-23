import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { FancySubheader } from './typography'

const IconSection = Styled.div`
    border: 0.25em solid rgba(0,0,0,0.0);
    border-radius: 1em;
&:hover {
    border: 0.25em solid #F04848;
}
`

export default function IconColumn({ name, handle, icon}) {
    return (
      <IconSection className="my-5">
        <Link to={handle}>
          <FontAwesomeIcon
            icon={icon}
            size={"8x"}
            className="text-warning p-2 d-block m-auto"
          />
          {name ? <FancySubheader className={`text-center mt-2 mx-0 text-warning`}>
            {name}
          </FancySubheader> : null}
        </Link>
      </IconSection>
    )
}

IconColumn.propTypes = {
    name: PropTypes.string,
    handle: PropTypes.string,
    icon: PropTypes.object,
    dark: PropTypes.bool,
}

IconColumn.defaultProps = {
  handle: "/"
}