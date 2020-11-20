import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Platform,
} from 'react-native';
import { Avatar, Appbar } from 'react-native-paper';

import styles from './home.style';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default class Toolbar extends React.Component {
  render() {
    return (
      <View style={styles.logo}>
        <Text style={styles.logo}>Facebook</Text>
        <View style={styles.toolbar}>
          <TouchableOpacity>
            <Avatar.Icon
              size={24}
              icon={require('../../assets/people_alt-24px.svg')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Avatar.Icon
              size={24}
              icon={require('../../assets/desktop_windows-24px.svg')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Avatar.Icon
              size={24}
              icon={require('../../assets/store_mall_directory-24px.svg')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Avatar.Icon
              size={24}
              icon={require('../../assets/notification_important-24px.svg')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
