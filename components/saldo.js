import {Text, StyleSheet} from 'react-native';
import {useSaldo} from '../context/contaprovider';

export default function Saldo(props){
    const {saldo} = useSaldo();

    return (
        <>
            <Text style={styles.text}>
                Saldo: {saldo}
            </Text>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: 'bold'
    }
});