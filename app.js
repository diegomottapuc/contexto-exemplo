import React, {useContext} from "react";
import {TextInput, Button, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Card} from 'react-native-paper';
import Lancamento from "./components/lancamento";
import Saldo from "./components/saldo";
import ContaProvider from "./context/contaprovider";

export default function App(){
    return (
        <ContaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.paragraph}>
                    Exemplo de uso de contexto {context}
                </Text>
                <Card>
                    <Saldo />
                    <Lancamento credito/>
                    <Lancamento/>
                </Card>
            </SafeAreaView>
        </ContaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeigth: 'bold',
        textAlign: 'center',
    },
});