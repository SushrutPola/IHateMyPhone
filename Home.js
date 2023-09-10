import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly transparent white
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  loadingText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333', // Dark gray text
  },
  playButton: {
    backgroundColor: '#f8755a', // Orange background
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
  },
  playButtonText: {
    fontFamily: 'ProximaNova-Regular',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    // Cleanup
    return () => clearTimeout();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#f8755a" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate('InstructThrow')} // Navigate to the game screen
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>Play iAmAngry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
