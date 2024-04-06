import React from 'react';

const useContador = () => {
    const [contador, setContador] = React.useState(0);

    const aumentar = () => {
        setContador(contador + 1);
    };

    const disminuir = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    const restaurar = () => {
        setContador(0);
    };

    return {
        contador,
        aumentar,
        disminuir,
        restaurar
    }
}

export default useContador;