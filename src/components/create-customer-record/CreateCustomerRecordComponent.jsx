import React from 'react';

import FormInput from './../form-input/FormInputComponent.jsx';

import CustomButton from './../custom-button/CustomButtonComponent.jsx';

import './create-customer-record.scss';

class CreateCustomerRecordComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        customerName: '',
        customerTelephoneNumber: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {customerName, customerTelephoneNumber} = this.state;

    return (
      <div>
        <form className='create-customer-record' onSubmit={this.handleSubmit}>
            <FormInput
                type='text'
                name='customerName'
                value={customerName}
                label='Customer Name'
                required></FormInput>

            <FormInput
                type='number'
                name='customerTelephoneNumber'
                value={customerTelephoneNumber}
                label='Customer Telephone Number'
                required></FormInput>

            <CustomButton type='submit'>Create</CustomButton>
        </form>
      </div>
    );
  }
};

export default CreateCustomerRecordComponent;
