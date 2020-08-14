import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Title, ConfirmButton, ConfirmButtonText } from './styles';

const OrderCreated: React.FC = () => {
  return (
    <Container>
      <Icon name="smile" size={80} />

      <Title>Pedido efetuado</Title>

      <ConfirmButton>
        <ConfirmButtonText>Obrigado</ConfirmButtonText>
      </ConfirmButton>
    </Container>
  );
};

export default OrderCreated;
