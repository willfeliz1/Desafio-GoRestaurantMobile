import React, { useCallback, useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Modal from '../../components/Modal';
import { Container, Title, TouchableWithoutFeedback2 } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const OrderCreated: React.FC = () => {
  const { reset } = useNavigation();

  const handleClosePressed = useCallback(() => {
    reset({
      routes: [{ name: 'MainBottom' }],
      index: 0,
    });

    return true;
  }, [reset]);

  return (
    <Container>
      <Modal isOpen>
        <Icon name="smile" size={80} color="#39B100" />
        <Title>Pedido confirmado!</Title>
      </Modal>
    </Container>
  );
};

export default OrderCreated;
