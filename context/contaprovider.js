import React, {useContext, createContext, useState} from 'react';
const ContaContext = createContext();

export default function ContaProvider(
    {children}){
        const [saldo, setSaldo] = useState(10);

        return (
            <ContaContext.Provider value ={{saldo, setSaldo}}>
                {children}
            </ContaContext.Provider>
        );
    }

export function useSaldo(){
    const context = useContext(ContaContext);
    const {saldo, setSaldo} = context;
    return {saldo, setSaldo};
}