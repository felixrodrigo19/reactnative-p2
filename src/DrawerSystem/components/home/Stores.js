import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Card } from 'react-native-paper';
export default class StoreFeed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Cover
            source={{ uri: 'https://picsum.photos/700' }}
            style={{
              resizeMode: 'cover',
              height: 200,
              width: 100,
            }}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
