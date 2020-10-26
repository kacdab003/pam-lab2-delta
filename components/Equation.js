import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function ({ a, b, c }) {
  const isAthere = !!a;
  const isBthere = !!b;
  const isCthere = !!c;
  let aInEquation = a;
  let bInEquation = b;
  let cInEquation = c;

  if (!isAthere) {
    aInEquation = '';
  } else {
    aInEquation = `${a}x^2`;
  }
  if (!isBthere) {
    bInEquation = '';
  } else {
    bInEquation = b < 0 ? `${b}x` : `+${b}x`;
  }
  if (!isCthere) {
    cInEquation = '';
  } else {
    cInEquation = c < 0 ? `${c}` : `+ ${c}`;
  }
  const equation = `${aInEquation} ${bInEquation} ${cInEquation}`;
  return (
    <View>
      <Text style={styles.text}>Obecna postać równania:</Text>
      <Text style={styles.textHighlighted}>{equation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    margin: 10,
  },
  textHighlighted: {
    fontSize: 30,
    textAlign: 'center',
    color: 'orange',
  },
});
