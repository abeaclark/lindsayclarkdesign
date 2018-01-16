import React from 'react'
import Helmet from 'react-helmet'
import Hills from 'media/hills.png'

const defaultDescription = "i'm a freelance designer | i prefer muted colors, lots of negative space, and thin lines"
const defaultTitle = "Lindsay Clark Design | Web + Mobile + Print"
const defaultImage = Hills
const defaultKeywords = 'design, graphic design, mobile design, mobile designer, web design, website design, branding, logo, colors, print design'

const mainScript={
  "type": "application/ld+json",
  "innerHTML": `{
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Lindsay Clark Design",
    "url": "https://www.lindsayclarkdesign.com",
    "sameAs": [
      "https://www.facebook.com/lindsayclarkdesign/",
    ]
  }`
}

export default ({ description=defaultDescription, title=defaultTitle, image=defaultImage, keywords=defaultKeywords, script }) => (
  <Helmet
    title={title}
    meta={[
      { property: 'description', content: description },
      { property: 'keywords', content:  keywords },
      { property: 'image', content: image },
    ]}
    script={[Object.assign(mainScript, script)]}
  >
    <meta property="og:description" content={description} />
    <meta property="twitter:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={image} />
    <meta property="og:image" content={image} />
    <meta
      property="twitter:image"
      content={image}
    />
  </Helmet>
)
