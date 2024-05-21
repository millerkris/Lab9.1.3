import React, { useState } from 'react';

const NumberConverter = () => {
    const [inputNumber, setInputNumber] = useState('');
    const [selectedBase, setSelectedBase] = useState('2');
    const [outputNumber, setOutputNumber] = useState('');

    const handleConvert = (e) => {
        e.preventDefault();

        const decimalNumber = parseInt(inputNumber, parseInt(selectedBase, 10));
        setOutputNumber(decimalNumber.toString(10));
    };

    return (
        <div>
            <input value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
            <select value={selectedBase} onChange={(e) => setSelectedBase(e.target.value)}>
                <option value="2">Binary (2)</option>
                <option value="8">Octal (8)</option>
                <option value="10">Decimal (10)</option>
                <option value="16">Hexadecimal (16)</option>
            </select>
            <input value={outputNumber} readOnly />

            <button onClick={handleConvert}>Convert</button>
        </div>
    );
};

const NumberConverterForm = () => {
    return (
        <form>
            <NumberConverter />
        </form>
    );
};

export default NumberConverterForm;