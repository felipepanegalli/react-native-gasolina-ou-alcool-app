import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './pages/Home';
import ResultModal from './components/Modal';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.view}>
      <ResultModal />
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#5E35B1',
    flex: 1,
  },
});

export default App;
