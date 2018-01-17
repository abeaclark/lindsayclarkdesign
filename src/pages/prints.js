import React from 'react'
import Link from '../components/base/link'
import Hero from 'baseComponents/hero'
import Button from 'material-ui/Button';
import Header from 'baseComponents/header'
import { fonts, colors, applicationStyles, metrics } from '../themes'
import { navigateTo } from "gatsby-link"
import TOC from 'baseComponents/toc'
import yellow from 'media/yellow-min.png'
import { MdFileDownload, } from 'react-icons/lib/md';
import cuddle from 'media/prints/CUDDLE.png'
import nice from 'media/prints/NICE.png'
import ocean from 'media/prints/OCEAN.png'
import sf from 'media/prints/SF.png'
import time from 'media/prints/TIME.png'
import women from 'media/prints/WOMEN.png'
import brooklyn from 'media/prints/brooklyn.jpg'
import chenery from 'media/prints/chenery-street.jpg'
import vernazza from 'media/prints/vernazza-italy.jpg'
import verona from 'media/prints/verona-italy.jpg'
import taraval from 'media/prints/taraval-street.jpg'
import taravalII from 'media/prints/taraval-street-II.jpg'

const styles = {
  image: {
    width: '100%',
    maxWidth: '200px',
  },
}

const prints = [
  {
    title: 'be nice',
    image: nice,
  },
  {
    title: 'strong women',
    image: women,
  },
  {
    title: 'the ocean',
    image: ocean,
  },
  {
    title: 'vernazza, italy',
    image: vernazza,
  },
  {
    title: 'brooklyn',
    image: brooklyn,
  },
  {
    title: 'chenery street',
    image: chenery,
  },
  {
    title: 'san francisco',
    image: sf,
  },
  {
    title: 'ordinary',
    image: time,
  },
  {
    title: "let's cuddle",
    image: cuddle,
  },
  {
    title: 'taraval street',
    image: taraval,
  },
  {
    title: 'taraval street II',
    image: taravalII,
  },
  {
    title: 'verona, italy',
    image: verona,
  },
]

const Print = ({image, title}) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: '10px',
      marginRight: '10px',
      marginTop: '30px',
      backgroundColor: '#fafafa',
      padding: '10px',
    }}
  >
    <div />
    <img
      src={image}
      css={{...styles.image}}
    />
    <div css={{ alignSelf: 'stretch'}}>
      <div 
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          bottom: '10px',
        }}
      >
        <p
          css={{fontFamily: 'Nunito', fontWeight: 'light'}}
        >
          {title}
        </p>
        <a
          css={{ cursor: "pointer", ":hover": { color: colors.lightGrey }, color: colors.darkGrey }}
          href={image}
          download
        >
          <MdFileDownload  />
        </a>
      </div>
    </div>
  </div>
)

class Prints extends React.Component {
  render() {
    const printElements = prints.map(data => <Print {...data} />)
    return (
      <div css={applicationStyles.outer} >
        <Header />
        <TOC
          image={yellow}
          pathname={this.props.location && this.props.location.pathname}
        />
        <div
          css={{
            marginTop: '60px',
            display: 'flex',
            maxWidth: metrics.maxWidth,
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {printElements}
        </div>
      </div>
    )
  }
}

export default Prints