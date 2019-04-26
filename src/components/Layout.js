import React from 'react'
import { Link } from 'gatsby'
import Toggle from './Toggle'

import { rhythm, scale } from '../utils/typography'
import Footer from './Footer'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

class Layout extends React.Component {
  constructor(props) {
    super(props)

    let theme = 'light'
    try {
      theme = localStorage.theme
    } catch (err) {}

    this.state = {
      theme,
    }

    document.body.className = theme // Not optimal we are doing this here
  }

  componentDidMount() {
    this.setState({ theme: window.__theme })
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }

  setTheme(color) {
    try {
      localStorage.setItem('theme', color)
      this.setState({ theme: color })
      document.body.className = color // Not optimal we are doing this here
    } catch (err) {}
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#87C946`,
              borderBottom: `5px solid #87C946`,
              lineHeight: `1.4`,
            }}
            to={`/`}
          >
            {title}
          </Link>

          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#87C946`,
              marginLeft: `1rem`,
              borderBottom: `5px solid #87C946`,
            }}
            to={`/about`}
          >
            About
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          color: 'var(--textNormal)',
          background: 'var(--bg)',
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {header}
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
            }}
            checked={this.state.theme === 'dark'}
            onChange={e => this.setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </div>
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
