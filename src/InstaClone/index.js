import React, { useEffect, useState } from 'react';

import axios from 'axios'

import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'


import { Container } from './styles';

const InstaClone = () => {
  const [ dados, setDados ] = useState()

  useEffect(() => {
    axios.get(
      "https://jsonplaceholder.typicode.com/photos?_start=1&_limit=20"
    ).then((rest) => {
      setDados(rest.data)
    })
  })

  const itens = dados ? dados.map((item) => { 
            let titulo = `Titulo: ${item.id}`
            return(
              <Card>
                <Card.Title title={ titulo } subtitle="Card Subtitle"/>
                <Card.Content>
                  <Title>{item.title}</Title>
                  <Paragraph>{item.title}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: item.url }} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
            )
          }) : "Carregando..."

  return (  
    <ScrollView>
    <View>
      <Text>
        { itens } 
      </Text>
    </View>
    </ScrollView>
  );
}
export default InstaClone;
