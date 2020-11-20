import React from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import { Avatar } from 'react-native-paper';

import styles from './home.style';

const MyStatus = () => {
  return (
    <View style={styles.status}>
      <Avatar.Image size={24} source={require('../../assets/my.jpg')} />
      <TextInput
        style={styles.sectionInput}
        placeholder="No que você está pensando"
      />
    </View>
  );
};

export default MyStatus;
