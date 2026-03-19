'use client'

import { useState } from "react"

export default function Teste() {
    const [numero, setNumero] = useState(0);

    const mais = () => {
        setNumero (numero+1);
    };

    const menos = () => {
        if (numero>0) {
            setNumero (numero-1);
        }
    };

    return(
        <div>
        <button onClick={mais}> +1 </button>
        <button onClick={menos}> -1 </button>
        <p>{numero}</p>
        </div>
    );
}
