import React from 'react'
import Headroom from 'react-headroom'
import Link from 'gatsby-link'
import { fonts, colors } from '../../themes'

const styles = {
  link: {
  	color: colors.darkGrey,
  	textDecoration: 'none',
    borderBottom: `1px solid ${colors.lightGrey}`,
  	':hover': {
  		color: colors.lightGrey,
      textDecoration: 'none',
      borderBottom: `1px solid ${colors.lightGrey}`,
  	},
    ':active': {
      color: colors.lightGrey,
      textDecoration: 'none',
      borderBottom: `1px solid ${colors.lightGrey}`,
    },
    ':focus': {
      color: colors.lightGrey,
      textDecoration: 'none',
      borderBottom: `1px solid ${colors.lightGrey}`,
    },
  },
}

const StyledLink = ({ css, children, href, ...props }) => {
  if (href) {
    return (
      <a href={href} target="blank" css={[styles.link, css]}>
        {children}
      </a>
    )
  }
  return (
    <Link {...props} css={[styles.link, css]}>
      {children}
    </Link>
  )
}
	
export default StyledLink


