import React from 'react'
import { applicationStyles } from 'themes'
import MainHelmet from 'components/base/mainHelmet'
import Header from 'components/base/header'
import './avenir-white.css'
import { Post } from 'pages/blog/index'

const styles = {
  image: {
    width: '100%',
    maxWidth: 500,
    border: '0px',
  },
}


class BlogTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <div>
        <div className="blog-post" css={applicationStyles.mainTextContainer}>
          <MainHelmet
            description={post.excerpt}
            title={`${post.frontmatter.title} | OnCallogy.com`}
            image={post.frontmatter.image}
            script={{
              "type": "application/ld+json",
              "innerHTML": `{
                "@context": "http://schema.org",
                "@type": "BlogPosting",
                "@id": "https://www.oncallogy.com${post.frontmatter.path}",
                "url": "https://www.oncallogy.com${post.frontmatter.path}",
                "headline":"${post.frontmatter.title}",
                "description":"${post.excerpt}",
                "image": "https://www.oncallogy.com${post.frontmatter.image}",
                "author": {
                  "@type": "Organization",
                  "name": "OnCallogy"
                },
                "datePublished": "${post.frontmatter.date}",
                "publisher": {
                  "@type": "Organization",
                  "name": "OnCallogy",
                  "logo": {
                    "url": "https://www.oncallogy.com/android-icon-144x144.png",
                    "type": "ImageObject"
                  }
                }
              }`
            }}
          />
          <Header />
          { Post({ data: post }) }
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    )
  }
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        id
        html
        excerpt
        frontmatter {
          title
          image
          date(formatString: "M.D.YYYY")
          path
        }
      }
    }
  `