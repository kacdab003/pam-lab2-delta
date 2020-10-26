import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ArgumentInput from './components/ArgumentInput';
import Equation from './components/Equation';
import Delta from './components/Delta';
import EquationSolutions from './components/EquationSolutions';

export default function App() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [delta, setDelta] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kalkulator delty</Text>
      <ArgumentInput title={'Wprowadź A'} setter={setA} />
      <ArgumentInput title={'Wprowadź B'} setter={setB} />
      <ArgumentInput title={'Wprowadź C'} setter={setC} />
      <Button title={'Oblicz'} />
      <Equation a={a} b={b} c={c} />
      <Delta a={a} b={b} c={c} setDelta={setDelta} />
      <EquationSolutions a={a} b={b} delta={delta} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    margin: 20,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 5,
  },
  input: {
    borderWidth: 5,
    color: 'white',
    borderColor: 'black',
    padding: 20,
  },
});
