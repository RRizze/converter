import React, { Component } from 'react';
import { ValueInput } from '../components/ValueInput';
import { SelectList } from '../components/SelectList';
import { tryConvert } from '../utils/tryConvert';

const valuesTypes = {
  Length: [
    'mile',
    'kilometer',
    'meter',
    'sentimeter',
    'millimeter',
    'micrometer',
    'nanometer'
  ],
  Mass: [
    'ton',
    'kilogram',
    'gram',
    'milligram',
    'pound',
    'ounce'
  ],
  Time: [
    'week',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
    'microsecond',
    'nanosecond'
  ],
  Pressure: [
    'atm',
    'pascal',
    'bar',
    'torr',
    'psi'
  ],
  Temperature: [
    'celsius',
    'kelvin',
    'fahrenheit'
  ]
};

export class Converter extends Component {
  constructor(props) {
    super(props);
    this.handleValueRChange = this.handleValueRChange.bind(this);
    this.handleValueLChange = this.handleValueLChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleScale1Change = this.handleScale1Change.bind(this);
    this.handleScale2Change = this.handleScale2Change.bind(this);

    this.state = {
      value: '',
      format: 'Length',
      types: [
        'mile',
        'kilometer',
        'meter',
        'sentimeter',
        'millimeter',
        'micrometer',
        'nanometer'
      ],
      scale1: 'meter',
      scale2: 'sentimeter',
      side: 'l'
    };
  }

  handleFormatChange(format) {
    this.setState({
      format,
      types: valuesTypes[format],
      scale1: valuesTypes[format][0],
      scale2: valuesTypes[format][1],
    });
  }

  handleScale1Change(scale) {
    this.setState({ scale1: scale });
  }

  handleScale2Change(scale) {
    this.setState({ scale2: scale });
  }

  handleValueRChange(value) {
    this.setState({ value, side: 'r' });
  }

  handleValueLChange(value) {
    this.setState({ value, side: 'l' });
  }

  render() {
    const formats = Object.keys(valuesTypes);
    const {format, value, types, scale1, scale2, side } = this.state;

    const res1 = side === 'r' ? tryConvert(value, scale1, scale2) : value;
    const res2 = side === 'l' ? tryConvert(value, scale1, scale2) : value;

    return(
      <div className='converter'>
        <SelectList
            className='select-list'
            list={formats}
            value={format}
            onValueChange={this.handleFormatChange} />
          <div className="inner-wrap">
            <div className="field-control">
              <ValueInput
                className='filed-control__item value-input'
                value={res1}
                onValueChange={this.handleValueLChange} />
              <SelectList
                className='filed-control__item'
                list={types}
                value={scale1}
                onValueChange={this.handleScale1Change} />
            </div>
            <div className="field-control">
              <ValueInput
                className='filed-control__item value-input'
                value={res2}
                onValueChange={this.handleValueRChange} />
              <SelectList
                className='filed-control__item'
                list={types}
                value={scale2}
                onValueChange={this.handleScale2Change} />
            </div>
          </div>
      </div>
    );
  }
}