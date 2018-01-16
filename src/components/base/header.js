import React from 'react'
import { metrics, colors } from 'themes'
import Link from 'gatsby-link'
import presets from 'lib/presets'

const styles = {
  outer: {
    width: "100%",
    maxWidth: metrics.maxWidth,
    paddingTop: "79px",
    paddingBottom: "62px",
    textAlign: "center",
    color: colors.darkGrey,
    textDecoration: 'none',
    fontSize: '30px',
    [presets.mobile]: {
      fontSize: "48px",
    }
  },
}


const Header = () =>
  <Link
    css={{...styles.outer }}
    to="/"
  >
    lindsay s. clark
  </Link>

export default Header
