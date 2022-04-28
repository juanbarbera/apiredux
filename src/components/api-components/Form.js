import React from 'react';
import { Formik, Field, Form } from 'formik';

import Button from 'react-bootstrap/Button';
import { Form as BootstrapForm } from 'react-bootstrap';


const ReusableForm = props => {

  return (
    <Formik
      initialValues={{
        searchTerm: ''
      }}
      onSubmit={value => {
        props.onSubmit(value);
      }}
    >
        <Form>
        <BootstrapForm.Group className="mb-3" >
          <BootstrapForm.Label htmlFor="searchTerm">{props.label}</BootstrapForm.Label>
          <div>
            <Field id="searchTerm" name="searchTerm" autoComplete="off" placeholder={props.placeholder}/>
          </div>
        </BootstrapForm.Group> 
        <Button variant="outline-info" type="submit">Submit</Button>                   
      </Form>  
    </Formik>
  );
}

export default ReusableForm;


