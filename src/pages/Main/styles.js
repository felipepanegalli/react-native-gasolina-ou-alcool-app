import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #5e35b1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const Icone = styled.Image`
  width: 128px;
  height: 128px;
  align-items: center;
`;

export const Titulo = styled.Text`
  font-size: 48px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  font-family: 'BigShouldersDisplay-Light';
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Descricao = styled.Text`
  color: #ffffff;
  font-size: 42px;
  font-family: 'BigShouldersDisplay-Light';
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#ffffff',
})`
  color: #ffffff;
  font-size: 42px;
  font-family: 'BigShouldersDisplay-Light';
`;
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #b39ddb;
  border-radius: 50px;
  margin: 20px 0 0 10px;
  padding: 14px;
  opacity: ${props => (props.loading ? 0.5 : 1)};
  height: 48px;
`;
export const SubmitButtonText = styled.Text`
  font-size: 24px;
  color: #5e35b1;
  font-family: 'BigShouldersDisplay-Light';
`;
