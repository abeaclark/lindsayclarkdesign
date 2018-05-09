import React from 'react'
import Link from '../components/base/link'
import Hero from 'baseComponents/hero'
import Button from 'material-ui/Button';
import Header from 'baseComponents/header'
import { fonts, colors, applicationStyles, metrics } from '../themes'
import { navigateTo } from "gatsby-link"
import TOC from 'baseComponents/toc'
import sunset from 'media/sunset-min.png'
import krasa from 'media/work/krasa.png'
import oncallogy from 'media/work/oncallogy.png'
import minutewithmads from 'media/work/minutewithmads.png'
import saltphoto from 'media/work/saltphoto.png'

const styles = {
  img: {
    width: '100%',
    maxWidth: metrics.maxWidth,
    marginTop: '40px',
  }
}

class Prints extends React.Component {
  render() {
    return (
      <div css={applicationStyles.outer} >
        <Header />
        <TOC
          image={sunset}
          pathname={this.props.location && this.props.location.pathname}
        />
        <img src={oncallogy} css={styles.img} />
        <img src={minutewithmads} css={styles.img} />
        <img src={krasa} css={styles.img} />
        <img src={saltphoto} css={styles.img} />
      </div>
    )
  }
}

export default Prints