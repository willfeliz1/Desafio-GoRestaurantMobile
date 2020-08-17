import React, { useCallback, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Modal from '../../components/Modal';
import { Container, Title } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const OrderCreated: React.FC = () => {
  const { reset } = useNavigation();
  const [modalStatus, setModalStatus] = useState(true);

  const handleClosePressed = useCallback(() => {
    reset({
      routes: [{ name: 'MainBottom' }],
      index: 0,
    });

    return true;
  }, [reset]);

  return (
    <Modal isOpen={modalStatus} ResetToHome={handleClosePressed}>
      <TouchableWithoutFeedback onPress={() => setModalStatus(!modalStatus)}>
        <Container>
          <Icon name="smile" size={80} color="#39B100" />
          <Title>Pedido confirmado!</Title>
        </Container>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default OrderCreated;
