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
    fontFamily: 'Josefin Sans !important',
    fontWeight: 'normal !important',
    border: '0px !important',
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
    lindsay clark design
  </Link>

export default Header
