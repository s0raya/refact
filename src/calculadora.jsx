import { useState } from 'react'

export default function Calculadora() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('suma');
    const [result, setResult] = useState('');

    const operations = {
        suma: (a,b) => parseFloat(a) + parseFloat(b),
        resta: (a,b) => parseFloat(a) - parseFloat(b),
        mult: (a,b) => parseFloat(a) * parseFloat(b),
        div: (a, b) => parseFloat(a) / parseFloat(b)        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(num1 === '' || num2 === '') {
            alert('Ingresar ambos números')
        }
        setResult(operations[operation](num1,num2));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder='add a number' onChange={(e) => setNum1(e.target.value)} value={num1} /> 
                <input type="number" placeholder='add a number' onChange={(e) => setNum2(e.target.value)} value={num2} />
                <select value={operation} onChange={e => setOperation(e.target.value)}>
                    <option value="suma">Suma</option>
                    <option value="resta">Resta</option>
                    <option value="mult">Multiplicacion</option>
                    <option value="div">Division</option>
                </select>
                <button type='submit'>Calcular</button>
            </form>
            <p>El resultado es {result}</p>
        </>
    )
}