import React, { Component } from 'react';

export class ValueInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onValueChange(e.target.value)
  }

  render() {
    const { value, className } = this.props;
    return (
      <input type="text"
        value={value}
        onChange={this.handleChange}
        className={className || ''} />
    );
  }
}