import React from 'react';

import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';

const ConfirmModal = ({ className, text, onClick }) => {
  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick,
        },
        {
          label: 'No',
          onClick: '',
        },
      ],
    });
  };

  return (
    <div className={className}>
      <button className={className} onClick={submit}>{text}</button>
    </div>
  );
};

export default ConfirmModal;
