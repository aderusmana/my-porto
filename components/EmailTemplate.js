import React from 'react';

const EmailTemplate = ({ name, subject, message }) => (
  <div className="font-sans text-center bg-gray-100 p-4">
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h1 className="text-2xl text-gray-800 mb-4"> {subject}</h1>
      <p className="text-lg text-gray-600">
        <strong>Thank you for contacting me ! :</strong> {name}
      </p>
      <p className="text-lg text-gray-600">
        <strong>New Message submitted :</strong> <br /> {message}
      </p>
    </div>
  </div>
);

export default EmailTemplate;
