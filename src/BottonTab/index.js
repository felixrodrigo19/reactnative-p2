import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container } from '../Home/styles'

function HomeScreen({ navigation, route }) {

    const [texto, setarTexto] = useState("")

    return (
        <Container>
            <Text>{`Digite um texto`} </Text>
            <TextInput
                style={{
                    backgroundColor: "#fff",
                    borderWidth: "1px",
                    borderRadius: "5px",
                    margin: "10px"
                }}
                onChangeText={(i) => setarTexto(i)}
            />
            <Text>{`O texto é: ` + texto} </Text>
            <Button
                title="Ir detalhes"
                onPress={() => navigation.push('Detalhes', {
                    texto: texto,
                    objeto: {
                        filho: "Jose",
                        idade: 5
                    }
                })}
            />

            <Text> {route.params?.text} </Text>
        </Container>
    )
}

function DetalhesScreen({ navigation, route }) {
    const [text, setText] = useState("")

    return (
        <Container>
            <Text>{`O texto digitado na tela anterior é`} </Text>
            <Text> {route.params?.texto} </Text>
            <TextInput
                style={{
                    backgroundColor: "#fff",
                    borderWidth: "1px",
                    borderRadius: "5px",
                    margin: "10px"
                }}
                onChangeText={(i) => setText(i)}
            />

            <Button
                title="Ir detalhes"
                onPress={() => navigation.navigate('Home', { text })}
            />
        </Container>
    )
}

function InformacoesScreen({ navigation }) {
    return (
        <Container>
            <Text>{`Informações`}</Text>
            <Button
                title="Ir detalhes"
                onPress={() => navigation.push('Detalhes')}
            />
        </Container>
    )
}

function ConfiguracoesScreen() {
    return (
        <Container>
            <Text>{`Tela de configurações`}</Text>
        </Container>
    )
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MenuInferior() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icone;
                    let cor;

                    cor = (focused) ? "purple" : "orange"

                    if (route.name === 'Home') {
                        icone = 'ios-home'
                    }
                    else if (route.name === "Inf") {
                        icone = "ios-information-circle"
                    }
                    else {
                        icone = "ios-settings"
                    }

                    return <Ionicons name={icone} size={size} color={cor} />
                }
            })
            }
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Inf" component={InformacoesScreen} />
            <Tab.Screen name="Settings" component={ConfiguracoesScreen} />
        </Tab.Navigator>
    )
}

function MenuInferior2() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icone;
                    let cor;

                    cor = (focused) ? "yellow" : "red"

                    if (route.name === 'Detalhes') {
                        icone = 'ios-home'
                    }
                    else {
                        icone = "ios-settings"
                    }

                    return <Ionicons name={icone} size={size} color={cor} />
                }
            })
            }
        >
            <Tab.Screen name="Detalhes" component={DetalhesScreen} />
            <Tab.Screen name="Settings" component={ConfiguracoesScreen} />
        </Tab.Navigator>
    )
}

//https://ionicframework.com/docs/v3/ionicons/

const BottonTab = () => {
    return (
        <NavigationContainer
            independent="true">
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={MenuInferior}
                />
                <Stack.Screen
                    name="Detalhes"
                    component={MenuInferior2}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default BottonTab;