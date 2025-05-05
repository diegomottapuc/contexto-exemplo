import React, {useState} from 'react';
import {Button, Text, TextInput, StyleSheet} from 'react-native';
import {useSaldo} from '../context/contaprovider';

export default function Lancamento(props){
    const [valor, setValor] = useState(0);
    const [saldo, setSaldo] = useSaldo();

    function efetuarLancamento(){
        if(props.credito)
            setSaldo(Number(valor) + Number(saldo));
        else
            setSaldo(Number(saldo) - Number(valor));
    }

    return(
        <>
        <TextInput style={styles.input} onChangeText={setValor} value={valor} />
        <Button title={props.credito ? 'Adicionar Saldo' : 'Subtrair Saldo'}
                color={props.credito ? 'green' : 'red'}
                onPress={() => {efetuarLancamento()}} />
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        paddin: 10,
    },
});