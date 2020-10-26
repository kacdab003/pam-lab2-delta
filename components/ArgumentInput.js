import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function ({ title, setter }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitleText}>{title}</Text>
      <TextInput
        onChangeText={(text) => setter(text)}
        style={styles.input}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  inputTitleText: {
    color: 'white',
    marginBottom: 5,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    borderWidth: 5,
    color: 'white',
    borderColor: 'black',
    padding: 20,
  },
});
