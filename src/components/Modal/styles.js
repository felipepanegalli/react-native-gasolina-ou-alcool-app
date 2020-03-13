import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #5e35b1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  padding: 35px;
  background-color: #ffffff;
  border-radius: 20px;
  justify-content: space-around;
  min-height: 220px;
  min-width: 80%;
`;

export const Titulo = styled.Text`
  font-size: 36px;
  color: #5e35b1;
  align-items: center;
  justify-content: center;
  font-family: 'BigShouldersDisplay-Light';
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #5e35b1;
  border-radius: 50px;
  margin: 20px 0 0 10px;
  padding: 14px;
  opacity: ${props => (props.loading ? 0.5 : 1)};
  height: 48px;
`;
export const SubmitButtonText = styled.Text`
  font-size: 24px;
  color: #ffffff;
  font-family: 'BigShouldersDisplay-Light';
`;
