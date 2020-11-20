import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Avatar, Card, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './home.style';

const FeedsView = () => {
  return (
    <View style={{ padding: 5 }}>
      <View style={{ padding: 5, flexDirection: 'row' }}>
        <Avatar.Image size={24} source={require('../../assets/person1.jpg')} />
        <View style={{ marginStart: 5 }}>
          <Text>Rapshider Kaijin</Text>
          <Text>1 d</Text>
        </View>
      </View>

      <View>
        <Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/710' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>200</Text>
            <Text>{'20 comentários'}</Text>
          </View>
          <Card.Actions
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <>
              <Avatar.Icon
                icon={require('../../assets/thumb_up-24px.svg')}
                size={10}
              />
              <TouchableOpacity>
                <Text>Curtir</Text>
              </TouchableOpacity>
            </>
            <>
              <Avatar.Icon
                icon={require('../../assets/mode_comment-24px.svg')}
                size={10}
              />
              <TouchableOpacity>
                <Text>Comentar</Text>
              </TouchableOpacity>
            </>
            <>
              <Avatar.Icon
                icon={require('../../assets/share-24px.svg')}
                size={10}
              />
              <TouchableOpacity>
                <Text>Compartilhar</Text>
              </TouchableOpacity>
            </>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
};

export default FeedsView;
