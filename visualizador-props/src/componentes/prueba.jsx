import React, { useState } from 'react';

const Prueba = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <h1>Lista de Elementos</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Añadir nuevo elemento"
            />
            <button onClick={() => { handleAddItem(); window.location.reload(); }}>Añadir</button>
        </div>
    );
};

export default Prueba;