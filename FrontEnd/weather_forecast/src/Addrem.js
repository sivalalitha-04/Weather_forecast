import React, { Component } from 'react';

class InputWithOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: [], // Initially, no options are selected
      availableOptions: ['Option 1', 'Option 2', 'Option 3'] // Array of available options
    };
  }

  handleOptionChange = (event) => {
    const { selectedOptions } = this.state;
    const selectedValue = event.target.value;
    if (!selectedOptions.includes(selectedValue)) {
      selectedOptions.push(selectedValue);
      this.setState({ selectedOptions });
    }
  };

  removeOption = (option) => {
    const { selectedOptions } = this.state;
    const updatedOptions = selectedOptions.filter((selectedOption) => selectedOption !== option);
    this.setState({ selectedOptions: updatedOptions });
  };

  render() {
    const { selectedOptions, availableOptions } = this.state;

    return (
      <div>
        <select onChange={this.handleOptionChange}>
          <option value="">Select an option</option>
          {availableOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div>
          <h3>Selected Options:</h3>
          <ul>
            {selectedOptions.map((option, index) => (
              <li key={index}>
                {option}
                <button onClick={() => this.removeOption(option)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default InputWithOptions;
