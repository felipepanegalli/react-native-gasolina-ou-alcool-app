import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ResultModal from '../components/Modal';

const Home = () => {
  const [gasCtl, setGasCtl] = useState('');
  const [aclCtl, setAclCtl] = useState('');

  const [resultText, setResultText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    let gas, alc, result;

    gas = parseFloat(gasCtl) / 100;
    alc = parseFloat(aclCtl) / 100;
    result = alc / gas;

    if (result >= 0.7) {
      setResultText('Compensa utilizar Gasolina!');
    } else {
      setResultText('Compensa utilizar Álcool!');
    }

    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  useEffect(() => {
    if (showModal === true) {
      setShowModal(true);
    }
  }, [showModal]);

  return (
    <>
      <Image
        className="image"
        style={styles.image}
        source={require('../assets/images/aog-white.png')}
      />
      <Text style={styles.titleText}>Álcool ou Gasolina?</Text>
      <View style={styles.container}>
        <View style={styles.containerData}>
          <Text style={styles.text}>Gasolina: </Text>
          <TextInput
            style={styles.edit}
            value={gasCtl}
            onChangeText={value => setGasCtl(value)}
            placeholder="0.00"
            placeholderTextColor="#FFFFFF"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.containerData}>
          <Text style={styles.text}>Álcool: </Text>
          <TextInput
            style={styles.edit}
            value={aclCtl}
            onChangeText={value => setAclCtl(value)}
            placeholder="0.00"
            placeholderTextColor="#FFFFFF"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity onPress={handleButtonClick}>
          <View style={styles.primaryButton}>
            <Text style={styles.textPrimaryButton}>Calcular</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ResultModal visible={showModal} text={resultText}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  containerData: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 25,
    width: 150,
    height: 150,
  },
  text: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 40,
    fontFamily: 'BigShouldersDisplay-Light',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 50,
    fontFamily: 'BigShouldersDisplay-Light',
    alignSelf: 'center',
    marginBottom: 25,
  },
  edit: {
    flex: 2,
    color: '#FFFFFF',
    fontSize: 40,
    fontFamily: 'BigShouldersDisplay-Light',
  },
  primaryButton: {
    backgroundColor: '#B39DDB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 15,
  },
  textPrimaryButton: {
    color: '#5E35B1',
    fontSize: 30,
    fontFamily: 'BigShouldersDisplay-Light',
  },
});

export default Home;
