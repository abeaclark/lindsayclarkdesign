import React from 'react'
import Header from 'baseComponents/header'
import { fonts, colors, applicationStyles, metrics } from 'themes'
import TOC from 'baseComponents/toc'
import succulents from 'media/succulents-min.png'

const styles = {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  postContainer: {
    width: '100%',
    paddingHorizontal: '80px',
    maxWidth: metrics.maxWidth,
    cursor: 'pointer',
    textDecoration: 'none',
    color: colors.darkGrey,
    position: 'relative',
    fontFamily: 'josfin sans',
    fontWeight: 'normal !important',
  },
  image: {
    width: '100%',
    maxWidth: metrics.maxWidth,
  },
  textHolder: {
    position: 'absolute',
    padding: 20,
  }
}

export const Post = ({ data, shouldLink=false} ) => {
  const contents = (
    <span>
      <div css={styles.textHolder}>
        <div css={{ fontSize: '20px', margin: 0, padding: 0 }}>
          {data.frontmatter.title}
        </div>
        <div css={{ color: colors.darkGrey, fontSize: '15px', margin: 0, padding: 0, fontWeight: '100', marginBottom: '10px' }}>
          {data.frontmatter.date}
        </div>
      </div>
      <img src={data.frontmatter.image} css={styles.image} />
    </span>
  )
  return(
    <div css={{ marginTop: shouldLink ? '30px' : 0 }}>
      {shouldLink &&
        <a href={data.frontmatter.path} css={styles.postContainer}>
          {contents}
        </a>
      }
      {!shouldLink &&
        <div css={{...styles.postContainer, cursor: 'normal'}}>
          {contents}
        </div>
      }
    </div>
  )
}


class Blog extends React.Component {
  render() {
    const { allMarkdownRemark } = this.props.data
    const postList = allMarkdownRemark.edges.map(({ node }) => Post({data: node, shouldLink: true}))
    return (
      <div css={applicationStyles.outer} >
        <Header />
        <TOC
          image={succulents}
          pathname={this.props.location && this.props.location.pathname}
        />
        <div css={{...styles.outer }}>
           {postList}
        </div>
      </div>
    )
  }
}
  

export default Blog

export const pageQuery = graphql`
  query BlogPostsIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
      }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "M.D.YYYY")
          }
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`