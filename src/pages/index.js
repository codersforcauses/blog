import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import SearchBar from '../components/SearchBar'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this)

    this.state = {
      searchTerm: null,
    }
  }

  handleSearchBarChange(event) {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { searchTerm } = this.state

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `coders for causes`, `javascript`, `react`]}
        />
        <Bio />
        <SearchBar handleChange={this.handleSearchBarChange} />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          if (
            searchTerm &&
            title.toLowerCase().indexOf(searchTerm.toLowerCase()) < 0 &&
            node.excerpt.toLowerCase().indexOf(searchTerm.toLowerCase()) < 0 &&
            node.frontmatter.date
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) < 0
          ) {
            return <span />
          }
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
