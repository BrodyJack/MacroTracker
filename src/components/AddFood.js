import React, { Component } from 'react';
import { postFood } from '../lib/food';

export default class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      carbs: '',
      fat: '',
      protein: ''
    };
  }

  componentDidMount = () => console.log('MOUNT: ', this.state);
  componentDidUpdate = () => console.log('UPDATE: ', this.state);
  componentWillUnmount = () => console.log('UNMOUNT: ', this.state);

  handleNameChange = event => this.setState({ name: event.target.value });
  handleCarbsChange = event =>
    this.setState({ carbs: parseInt(event.target.value) });
  handleFatChange = event =>
    this.setState({ fat: parseInt(event.target.value) });
  handleProteinChange = event =>
    this.setState({ protein: parseInt(event.target.value) });

  handleSubmit = async event => {
    event.preventDefault();
    const { addFood } = this.props;
    const valid = this.validateInput(this.state);
    if (!valid) {
      return; // TODO user experience
    }
    await postFood([this.state]);
    addFood(this.state);
    // alert('Added!')
  };

  validateInput = input => {
    const { name, carbs, fat, protein } = input;
    return !!(name && (carbs || fat || protein));
  };

  render() {
    const { name, carbs, fat, protein } = this.state;
    return (
      <div>
        <h2>Add Food</h2>
        <form onSubmit={this.handleSubmit}>
          <FormField
            name="Name"
            value={name}
            onChange={this.handleNameChange}
          />
          <FormField
            name="Carbs (g)"
            type="number"
            value={carbs}
            onChange={this.handleCarbsChange}
          />
          <FormField
            name="Fat (g)"
            type="number"
            value={fat}
            onChange={this.handleFatChange}
          />
          <FormField
            name="Protein (g)"
            type="number"
            value={protein}
            onChange={this.handleProteinChange}
          />
          <input className="Entry-button" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

const FormField = ({ name, type, value, onChange }) => (
  <div>
    <label>
      {name}
      <input
        type={type}
        className="Entry-input"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);
