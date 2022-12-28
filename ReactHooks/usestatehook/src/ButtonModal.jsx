import React from 'react';

const ButtonModal = ({ setModal, modal, children, insideModal = false }) => {
  return (
    <button
      className={`w-fit border rounded-md px-2 ${
        insideModal
          ? 'text-red-700 border-red-700'
          : 'text-gray-700 border-gray-700 '
      }`}
      onClick={() => setModal(!modal)}
    >
      {children}
    </button>
  );
};

export default ButtonModal;
