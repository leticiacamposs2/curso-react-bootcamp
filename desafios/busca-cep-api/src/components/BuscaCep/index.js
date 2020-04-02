import React, { useState, useEffect } from 'react';
import FormAddress from '../FormAddress';

const BuscaCep = (props) => {
    
    const [address, setAddress] = useState([]);
    const cep = '04551010'

    useEffect( () => {
        fetch(`http://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(cepResult => {
                setAddress(cepResult);
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <FormAddress cep={address.cep} 
            logradouro={address.logradouro} 
            bairro={address.bairro}
            localidade={address.localidade}
            uf={address.uf}
        />
    );
}

export default BuscaCep;