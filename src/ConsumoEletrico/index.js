import React, { useState } from 'react';
import { Container, Submited, Texto, Input } from './styles';

const ConsumoEletrico = () => {
    const [watts, setWatts] = useState("")
    const [horas, setHoras] = useState("")
    const [dias, setDias] = useState("")

    const [resultado, setResultado] = useState("0")

    const gastoTotal = async () => {
        let gasto = ((watts / 1000) * horas) * dias * 0.85
        setResultado(gasto)
    };
    return (
        <Container>
            <Input
                placeholder="Quantidade em Watts "
                onChangeText={(e) => setWatts(e)}
                value={watts} />

            <Input
                placeholder="Horas Usadas"
                onChangeText={(e) => setHoras(e)}
                value={horas} />

            <Input
                placeholder="Dias Usados"
                onChangeText={(e) => setDias(e)}
                value={dias} />

            <Container>
                <Texto>O seu gasto vai ser de: {resultado} Reais.</Texto>
                <Submited
                    title="Enviar"
                    onPress={() => gastoTotal()}>

                </Submited>
            </Container>
        </Container>
    );
};

export default ConsumoEletrico;
