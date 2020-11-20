import * as React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './home.style';

import Toolbar from './toolbar';
import MyStatus from './share';
import StoreFeed from './Stores';
import FeedsView from './feeds';

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.other}>
        <Toolbar />
        <MyStatus />
        <StoreFeed />
        <FeedsView />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
