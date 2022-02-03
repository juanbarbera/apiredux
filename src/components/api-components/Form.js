import React from 'react';
import { Form, Field } from 'react-final-form';

import Button from 'react-bootstrap/Button';
import { Form as BootstrapForm } from 'react-bootstrap';


class ReusableForm extends React.Component {
  // destructures input, meta and placeholder from props. placeholder is an additional props passed by me that is automatically identified as prop an passed to the component.
  renderInput = ({ input, meta, placeholder }) => {
    return (
      <BootstrapForm.Control {...input} type="text" placeholder={placeholder} autoComplete="off"/>
    )
  }

  onSubmit = value => {
    this.props.onSubmit(value);
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} label={this.props.label} placeholder={this.props.placeholder} >
        {props => (
          <BootstrapForm onSubmit={props.handleSubmit}>
            <BootstrapForm.Group className="mb-3" controlId="searchTermForm">
              <BootstrapForm.Label>{props.label}</BootstrapForm.Label>
              {/* placeholder is passed as props to renderInput. */}
              <Field name="searchTerm" component={this.renderInput} placeholder={props.placeholder} />
              </BootstrapForm.Group>
            <Button variant="outline-info" type="submit" style={{justifyContent: 'center'}}>Submit</Button>
          </BootstrapForm>
        )}
      </Form>
    )
  };
}

export default ReusableForm;


