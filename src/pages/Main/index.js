import React, {Component} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import Modal from '../../components/Modal';

import {
  Container,
  Icone,
  Titulo,
  Descricao,
  Input,
  SubmitButton,
  SubmitButtonText,
  Header,
  Section,
} from './styles';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    gasoline: 0,
    alchool: 0,
    resultText: 'Compensa utilizar Álcool',
    loading: false,
    visible: false,
  };

  handleCalc = async () => {
    const {gasoline, alchool} = this.state;
    this.setState({loading: true});

    // Verifica se algum campo esteja em branco
    if (!parseFloat(gasoline) || !parseFloat(alchool)) {
      this.setState({loading: false});
      return alert('Preencha ambos os dados.');
    }

    const gas = parseFloat(gasoline) / 100;
    const alc = parseFloat(alchool) / 100;
    const auxResult = alc / gas;

    if (auxResult >= 0.7) {
      this.setState({resultText: 'Compensa utilizar Gasolina!'});
    } else {
      this.setState({resultText: 'Compensa utilizar Álcool!'});
    }

    await setTimeout(() => {
      this.setState({
        loading: false,
        visible: true,
      });
    }, 1000);

    Keyboard.dismiss();
  };

  handleCloseModal = () => {
    this.setState({
      visible: false,
      gasoline: 0,
      alchool: 0,
    });
  };

  render() {
    const {gasoline, alchool, loading, visible, resultText} = this.state;
    return (
      <>
        {visible ? (
          <Modal close={this.handleCloseModal} resultText={resultText} />
        ) : (
          <Container>
            <Header>
              <Icone source={require('../../assets/images/aog-white.png')} />
              <Titulo>Álcool ou Gasolina</Titulo>
            </Header>
            <Section>
              <Descricao>Gasolina: </Descricao>
              <Input
                placeholder="0.00"
                value={gasoline}
                onChangeText={gas => this.setState({gasoline: gas})}
                keyboardType="numeric"
                returnKeyType="done"
              />
            </Section>
            <Section>
              <Descricao>Álcool: </Descricao>
              <Input
                placeholder="0.00"
                value={alchool}
                onChangeText={alc => this.setState({alchool: alc})}
                keyboardType="numeric"
              />
            </Section>
            <SubmitButton onPress={this.handleCalc} loading={loading}>
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <SubmitButtonText>CALCULAR</SubmitButtonText>
              )}
            </SubmitButton>
          </Container>
        )}
      </>
    );
  }
}
