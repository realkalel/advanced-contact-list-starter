import React, { Component } from 'react';

/* eslint max-len: [1, {"ignoreUrls": true}] */

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <input
        className='search-bar'
        type="text"
        value={this.state.value}
        onChange={event => this.handleChange(event)}
      />
    );
  }
}

export default SearchBar;
