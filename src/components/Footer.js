import React from 'react'

import { rhythm } from '../utils/typography'

const NewsLetterSignup = () => (
  <form
    action="https://tinyletter.com/codersforcauses"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/codersforcauses', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    style={{
      borderRadius: '6px',
      boxShadow: '0 2px 15px 0 rgba(210,214,220,.5)',
      maxWidth: '700px',
      overflow: 'hidden',
      padding: '0 3rem 3rem 3rem',
    }}
  >
    <h2 style={{ color: '#87C946' }}>Subscribe to Coders for Causes Blog</h2>
    <p>
      <input
        type="email"
        name="email"
        id="tlemail"
        required
        placeholder="Email address"
        style={{
          width: '100%',
          padding: '12px',
          lineHeight: '1.4',
          border: '1px solid #e3e3e3',
          fontSize: '15px',
          fontWeight: '400',
          borderRadius: '3px',
        }}
      />
    </p>
    <input type="hidden" value="1" name="embed" />
    <input
      type="submit"
      value="Subscribe"
      style={{
        borderRadius: '24px',
        color: 'white',
        fontWeight: '700',
        backgroundColor: '#87C946',
        border: 'none',
        padding: '0.5rem 1rem 0.5rem 1rem',
      }}
    />
  </form>
)

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(1),
          paddingTop: rhythm(1),
        }}
      >
        <NewsLetterSignup />
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
