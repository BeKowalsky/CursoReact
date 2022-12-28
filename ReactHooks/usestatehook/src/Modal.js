import React from 'react';
import ButtonModal from './ButtonModal';

const Modal = ({ modal, setModal }) => {
  return (
    <div
      className={`${
        modal ? 'fixed' : 'hidden'
      } backdrop-blur-[3px] w-full h-full flex justify-center`}
    >
      <div className=" border border-[#999999] flex h-fit flex-col mt-10 p-3 w-1/4 bg-[#C0DEFF]  rounded-xl">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-gray-700 font-medium">Modal</h1>
          <ButtonModal setModal={setModal} modal={modal} insideModal>
            X
          </ButtonModal>
        </div>
        <div>
          <textarea
            className="w-full rounded-xl mt-2.5 resize-none shadow-none outline-0 box-border p-2.5 h-[25vh] border border-[#999999] text-sm text-gray-700"
            placeholder="Escreva aqui..."
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
