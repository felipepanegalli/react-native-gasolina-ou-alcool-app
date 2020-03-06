import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './pages/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.view}>
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
