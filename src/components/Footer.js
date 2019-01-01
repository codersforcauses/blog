import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://facebook.com/codersforcauses"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{' '}
        &bull;{' '}
        <a
          href="https://codersforcauses.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
         &bull;{' '}
        <a
          href="https://github.com/codersforcauses"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    )
  }
}

export default Footer
