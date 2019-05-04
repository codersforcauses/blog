import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input
        placeholder="Find Something"
        onChange={this.props.handleChange}
        class="search-bar"
      />
    )
  }
}
