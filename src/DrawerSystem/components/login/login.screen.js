import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Field,
  Image,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './login.style';
import Toolbar from './toolbar';

const LoginScreen = ({ props, navigation }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values) => console.log(values)}
    validationSchema={yup.object().shape({
      email: yup.string(),
      //        .email(),
      //        .required('Campo obrigatório'),

      telefone: yup.string(),
      // .phone(),
      //      .required('Campo obrigatório'),

      EmailorPhone: yup.bool().when(['email', ' telefone'], {
        is: (email, telefone) =>
          (!email && !telefone) || (!!email && !!telefone),
        then: yup
          .bool()
          .required(
            'O email ou número de telefone inserido não corresponde a nenhuma conta.'
          ),
        otherwise: yup.bool(),
      }),

      password: yup
        .string('A senha inserida está incorreta.')
        .required('Campo obrigatório'),
    })}>
    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
      <View style={styles.container}>
        <Toolbar />

        <View style={styles.section}>
          <TextInput
            style={styles.sectionInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="E-mail ou telefone"
          />

          <TextInput
            style={styles.sectionInput}
            secureTextEntry={true}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Senha"
          />
          {errors.password && (
            <Text style={styles.errors}>{errors.password}</Text>
          )}
          {errors.EmailorPhone && (
            <Text style={styles.errors}>{errors.EmailorPhone}</Text>
          )}

          <Button
            disabled={!isValid}
            onPress={() => navigation.navigate('Home')}
            title="Submit"
          />
        </View>
      </View>
    )}
  </Formik>
);

export default LoginScreen;
