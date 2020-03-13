import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container, Box, Titulo, SubmitButton, SubmitButtonText} from './styles';

export default class Modal extends Component {
  state = '';

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    close: PropTypes.func.isRequired,
    resultText: PropTypes.string.isRequired,
  };

  render() {
    const {close, resultText} = this.props;

    return (
      <Container>
        <Box>
          <Titulo>{resultText}</Titulo>
          <SubmitButton onPress={close}>
            <SubmitButtonText>CALCULAR NOVAMENTE</SubmitButtonText>
          </SubmitButton>
        </Box>
      </Container>
    );
  }
}
