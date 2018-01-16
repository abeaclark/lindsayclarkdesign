import React from 'react'
import Link from '../components/base/link'
import Hero from 'baseComponents/hero'
import Button from 'material-ui/Button';
import Header from 'baseComponents/header'
import { fonts, colors, applicationStyles, metrics } from '../themes'
import { navigateTo } from "gatsby-link"
import TOC from 'baseComponents/toc'
import sunset from 'media/sunset.png'

const styles = {
}

class Prints extends React.Component {
  render() {
    return (
      <div css={applicationStyles.outer} >
        <Header />
        <TOC
          image={sunset}
          pathname={this.props.location.pathname}
        />
      </div>
    )
  }
}

export default Prints