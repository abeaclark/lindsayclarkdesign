import React from 'react'
import Link from '../components/base/link'
import Hero from 'baseComponents/hero'
import Button from 'material-ui/Button';
import Header from 'baseComponents/header'
import { fonts, colors, applicationStyles, metrics } from '../themes'
import { navigateTo } from "gatsby-link"
import TOC from 'baseComponents/toc'

const styles = {
}

class IndexPage extends React.Component {
  render() {
    return (
      <div css={applicationStyles.outer} >
        <Header />
        <TOC
          pathname={this.props.location && this.props.location.pathname}
        />
        <div 
          css={{
            width: '100%',
            maxWidth: metrics.maxWidth,
            fontSize: '16px',
            fontWeight: '100',
            textAlign: 'center',
            marginTop: '48px',
            marginBottom: '77px',
            letterSpacing: 2.42,
            paddingRight: '20px',
            paddingLeft: '20px',
            lineHeight: '38px',
          }}
        >
          <div>
            i'm a freelance designer who loves the 
            {' '}<Link href="https://www.instagram.com/p/BVX3et2lHsE/">ocean</Link> + 
            {' '}<Link href="https://www.instagram.com/p/Bd3bJJWnH2Z/">soft serve ice cream</Link>.
          </div>
          <div>
            i love my family
          </div>
          <div>
            [ 
            {' '}<Link href="https://www.linkedin.com/in/abrahamclark/">abe</Link> +
            {' '}<Link href="https://www.instagram.com/p/BWq0z7blhzg/">stella</Link> + our dog
            {' '}<Link href="https://www.instagram.com/p/BX6Ysd8l1Nj/">charlie</Link> ]
          </div>
          <div>
            i prefer muted colors, lots of negative space, and thin lines;
          </div>
          <div>
            although i'm not afraid to be <span css={{ fontWeight: 'bold' }}>bold</span> when the occassion calls for it.
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage