import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, field => (
    <div>
      <label>{field.label}</label>
      <div>{formValues[field.name]}</div>
    </div>
  ));
  return (
    <div>
      <h5>Confirm it</h5>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  console.log('state: ', state.form.surveyForm.values);
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps)(SurveyFormReview);
