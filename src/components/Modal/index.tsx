import React, { useState, useEffect } from 'react';

import ReactNativeModal from 'react-native-modal';

interface IModalProps {
  children: any;
  isOpen: boolean;
  ResetToHome: () => boolean;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, ResetToHome }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [modalStatus, isOpen]);

  return (
    <ReactNativeModal
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={ResetToHome}
      isVisible={modalStatus}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </ReactNativeModal>
  );
};

export default Modal;
