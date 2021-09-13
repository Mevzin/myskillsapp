import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <Text>Ignite</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})