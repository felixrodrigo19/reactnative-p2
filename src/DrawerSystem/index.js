import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import Home from '../Home'
import Calculadora from '../Calculadora';
import InstaClone from '../InstaClone';
//import RoutesMaps from '../RoutesMaps';
import Aplication from '../Facebook/components';
import BottonTab from '../BottonTab';
import ConsumoEletrico from '../ConsumoEletrico';


const Drawer = createDrawerNavigator();

const DrawerSystem = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#F2ECE9'
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Calculadora" component={Calculadora} />
        <Drawer.Screen name="Instagram" component={InstaClone} />
        <Drawer.Screen name="Consumo Eletrico" component={ConsumoEletrico} />
        <Drawer.Screen name="FacebookClone" component={Aplication} />
        <Drawer.Screen name="Botton Tab" component={BottonTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerSystem
