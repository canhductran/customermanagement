import React from 'react';

import FormInput from './../form-input/FormInputComponent.jsx';

import CustomButton from './../custom-button/CustomButtonComponent.jsx';

import SearchCustomerRecordsResults from './../search-customer-records-results/SearchCustomerRecordsResults.jsx';

import './search-customer-records.scss';

class SearchCustomerRecordsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        customerTelephoneNumber: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {customerTelephoneNumber} = this.state;

    return (
      <div>
        <form className='search-customer-records' onSubmit={this.handleSubmit}>
            <FormInput
                type='number'
                name='customerTelephoneNumber'
                value={customerTelephoneNumber}
                label='Customer Telephone Number'
                required></FormInput>

            <CustomButton type='submit'>Search</CustomButton>
        </form>

        <SearchCustomerRecordsResults></SearchCustomerRecordsResults>
      </div>
    );
  }
};

export default SearchCustomerRecordsComponent;
