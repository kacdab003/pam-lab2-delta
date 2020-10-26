import React from 'react';
import { StyleSheet, Text } from 'react-native';
export default function ({ a, b, c, setDelta }) {
  const calculateDeltaHandler = (a, b, c) => Math.pow(b, 2) - 4 * a * c;
  const aInEquation = a ? a : 0;
  const bInEquation = b ? b : 0;
  const cInEquation = c ? c : 0;

  setDelta(calculateDeltaHandler(aInEquation, bInEquation, cInEquation));
  return (
    <Text style={styles.text}>
      Delta: {calculateDeltaHandler(aInEquation, bInEquation, cInEquation)}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'orange',
  },
});
