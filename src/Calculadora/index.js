import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import { Container, ContainerDisplay, ContainerBotoes, TextFormula, TextValor } from './styles';
const data = require("./data.json")


const Calculadora = () => {

  const [state, setstate] = useState({
    valorDisplay: "",
    formula: ""
  });

  var handleClick = (valor) => {
    //valor = valor.replace(',', '.')

    if (valor == "C") {
      setstate({
        valorDisplay: "",
        formula: ""
      })
      return
    }


    // Bug ao clicar 2x no "="
    if (valor == "=") {
      var total = eval(state.formula.replace(/,/g, '.'))
      setstate({
        valorDisplay: total.toString().replace(".", ',')
      })
      return
    }

    var valorReal = ""
    if (valor == "+/-") {
      valorReal = -1 * state.valorDisplay
    } else {
      if (valor == ",") {
        console.log(state.valorDisplay.lenght)
      }
      else {
        valorReal = (isNaN(valor)) ? "" : state.valorDisplay + valor
      }
    }

    setstate({
      valorDisplay: valorReal,
      formula: (valor == "+/-") ? valorReal : state.formula + valor
    })
  };

  return (
    <Container>
      <ContainerDisplay>
        <View style={{ flex: 2 }}>
          <TextFormula>{state.formula} </TextFormula>
        </View>
        <View style={{ flex: 3 }}>
          <TextValor>{state.valorDisplay} </TextValor>
        </View>
      </ContainerDisplay>

      <ContainerBotoes>
        <View style={styles.linhaBotao}>
          {
            data.map((objeto, key) => {
              return (
                <TouchableHighlight
                  style={(objeto.cor == "cinza") ? styles.btnCinza : styles.btnLaranja}
                  onPress={() => {
                    handleClick(objeto.item);
                  }}>
                  <Text>{objeto.item}</Text>
                </TouchableHighlight>
              )
            })
          }
        </View>
      </ContainerBotoes>
    </Container>
  );
}

const styles = StyleSheet.create({
  linhaBotao: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#B9BFB4",
    width: (Dimensions.get('window').width),
  },
  btnCinza: {
    backgroundColor: 'gray',
    width: (Dimensions.get('window').width) / 4.5,
    height: (Dimensions.get('window').height) / 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "60px"
  },
  btnLaranja: {
    backgroundColor: 'orange',
    width: (Dimensions.get('window').width) / 4.5,
    height: (Dimensions.get('window').height) / 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "60px"
  },
});

export default Calculadora;
