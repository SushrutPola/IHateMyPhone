import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructionText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 30,
  },
  playButton: {
    backgroundColor: '#f8755a',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  playButtonText: {
    fontFamily: 'ProximaNova-Regular',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export function InstructionsThrow({ navigation }) {
  return (
      <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to the iAmAngry!</Text>
      <View style={{paddingTop:50}}></View>

      <Text style={styles.instructionText}>Follow these instructions:</Text>
      <Text style={styles.instructionText}>1. Hit the start button.</Text>
      <Text style={styles.instructionText}>2. Throw your phone at ungodly speeds.</Text>
      <Text style={styles.instructionText}>3. Hit the stop button.</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Throw')}
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>Let Me Play!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
