import React from 'react';

export default ({ input, label, meta: { touched, error } }) => (
  <div>
    <label htmlFor="title">{label}</label>
    <input {...input} style={{ marginBottom: '5px' }} />
    {/* the same as onBlur={input.onBlur} */}
    <div className="red-text" style={{ marginBottom: '20px' }}>
      {touched && error}
    </div>
  </div>
);
