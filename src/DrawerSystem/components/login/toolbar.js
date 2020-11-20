import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import styles from './login.style';

export default class Toolbar extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.logo}>Facebook</Text>
      </View>
    );
  }
}
