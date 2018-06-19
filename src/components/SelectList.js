import React, { Component } from 'react';

export class SelectList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onValueChange(e.target.value)
  }

  render() {
    const { list, value, className } = this.props;

    return (
      <select
        onChange={this.handleChange}
        value={value}
        className={className || ''} >
        {
          list.map((value) => <option value={value} key={value}>{value}</option>)
        }
      </select>
    );
  }
}