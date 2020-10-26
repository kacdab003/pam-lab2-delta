import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function ({ a, b, delta }) {
  const calculateEquationSolution = (a, b, delta) => {
    if (!delta) {
      return `x0: ${(-b / 2) * a}`;
    }
    if (delta < 0) {
      return 'Brak rozwiązań';
    }
    if (delta > 0) {
      return `x1: ${(-b - Math.sqrt(delta)) / (2 * a)}, x2: ${
        (-b + Math.sqrt(delta)) / (2 * a)
      }`;
    }
  };
  return (
    <Text style={styles.text}>
      Rozwiązanie: {calculateEquationSolution(a, b, delta)}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'gold',
    fontSize: 20,
  },
});
