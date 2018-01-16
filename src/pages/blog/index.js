import React from 'react'
import Header from 'baseComponents/header'
import { fonts, colors, applicationStyles, metrics } from 'themes'
import TOC from 'baseComponents/toc'
import succulents from 'media/succulents.png'

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
    marginTop: '30px',
    paddingHorizontal: '80px',
    maxWidth: metrics.maxWidth,
    cursor: 'pointer',
    textDecoration: 'none',
    color: colors.darkGrey,
    marginBottom: 40,
  },
  image: {
    width: '100%',
    maxWidth: metrics.maxWidth,
  },
  textHolder: {
    padding: 20,
    paddingTop: 5,
  }
}

const post = (data) => {
  return(
    <a href={data.frontmatter.path} css={styles.postContainer}>
      <div css={styles.textHolder}>
        <div css={{ fontSize: '20px', margin: 0, padding: 0 }}>
          {data.frontmatter.title.toUpperCase()}
        </div>
        <p css={{ color: colors.grey, fontSize: '15px', margin: 0, padding: 0, fontWeight: '100', marginBottom: '10px' }}>
          {data.frontmatter.date}
        </p>
        <img src={data.frontmatter.image} css={styles.image} />
        <div css={{ borderBottom: `1px solid ${colors.lightGrey}`, marginTop: '10px' }}/>
      </div>
    </a>
  )
}


class Blog extends React.Component {
  render() {
    const { allMarkdownRemark } = this.props.data
    const postList = allMarkdownRemark.edges.map(({ node }) => post(node))
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