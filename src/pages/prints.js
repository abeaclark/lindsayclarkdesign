import React from 'react'
import Link from '../components/base/link'
import Hero from 'baseComponents/hero'
import Button from 'material-ui/Button';
import Header from 'baseComponents/header'
import { fonts, colors, applicationStyles, metrics } from '../themes'
import { navigateTo } from "gatsby-link"
import TOC from 'baseComponents/toc'
import Modal from 'react-modal';
import yellow from 'media/yellow-min.png'
import { MdClose, } from 'react-icons/lib/md';
import brooklyn from 'media/prints/brooklyn.jpg'
import chenery from 'media/prints/chenery-street.jpg'
import vernazza from 'media/prints/vernazza-italy.jpg'
import verona from 'media/prints/verona-italy.jpg'
import taraval from 'media/prints/taraval-street.jpg'
import taravalII from 'media/prints/taraval-street-II.jpg'
import sfEats from 'media/prints/sf-eats.png'
import sfIceCream from 'media/prints/sf-icecream.png'
import oceanColorful from 'media/prints/ocean-colorful.png'

const styles = {
  image: {
    width: '100%',
    maxWidth: '200px',
  },
}

const prints = [
  {
    image: oceanColorful,
  },
  {
    image: sfEats,
  },
  {
    image: sfIceCream,
  },
  {
    title: 'chenery street',
    image: chenery,
  },
  {
    title: 'taraval street I',
    image: taraval,
  },
  {
    title: 'taraval street II',
    image: taravalII,
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
    title: 'verona, italy',
    image: verona,
  },
]

const Print = ({image, title, onClick}) => (
  <div
    onClick={onClick}
    css={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: '10px',
      marginRight: '10px',
      marginTop: '30px',
      backgroundColor: '#fafafa',
      padding: '10px',
      cursor: 'pointer',
    }}
  >
    <div />
    <img
      src={image}
      css={{...styles.image}}
    />
    <div css={{ alignSelf: 'stretch'}}>
      {title && 
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
        </div>
      }
    </div>
  </div>
)

// <a
//   css={{ cursor: "pointer", ":hover": { color: colors.lightGrey }, color: colors.darkGrey }}
//   href={image}
//   download
// >
//   <MdFileDownload  />
// </a>

class Prints extends React.Component {
  constructor() {
    super();

    this.state = {
      modalPhoto: null,
      modalPhotoTitle: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalPhoto, modalPhotoTitle) {
    this.setState({
      modalPhotoTitle,
      modalPhoto
    });
  }

  closeModal() {
    this.setState({
      modalPhoto: null,
      modalPhotoTitle: null,
    });
  }
  render() {
    console.log(this.state)
    const printElements = prints.map(data => <Print onClick={() => this.openModal(data.image, data.title)} {...data} />)
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
        <Modal
          isOpen={!!this.state.modalPhoto}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={{
              overlay: {
                backgroundColor: 'rgba(0,0,0,.7)'
              },
              content: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                outline: "none",
                border: 0,
                padding: 0,
                backgroundColor: 'rgba(0,0,0,0)',
                padding: '1vh',
              }
            }}
        >
          <div css={{ height: '98vh', width: '96vw', display: 'flex', flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
              <div>
                <div css={{display: 'flex', flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between', padding: '1%'}}>
                  <div onClick={this.closeModal} css={{ cursor: 'pointer'}}>
                    <MdClose size={25} color="white"/>
                  </div>
                  <span css={{color: 'white'}}>{this.state.modalPhotoTitle}</span>
                </div>
              <img
                css={{maxWidth: '96vw', maxHeight: '90vh'}}
                src={this.state.modalPhoto}
              />
              </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Prints