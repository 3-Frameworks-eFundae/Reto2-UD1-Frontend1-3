import React, { useState } from "react";

export default function VisualizadorProps(props) {
    const { listaTareas } = props
    const [lista, setLista] = useState(listaTareas);
    const [nuevaTarea, setNuevaTarea] = useState('');


    function handleAdd() {
        if (nuevaTarea.trim() !== '') {
            setLista([...lista, nuevaTarea]);
            setNuevaTarea('');
        }
    }

    function handleRemove() {
        setLista(lista.filter(item => item !== lista));
    }

    return (
        <div>
            <h2>Lista de tareas</h2>
            <ul>
                {
                    listaTareas.map(item => (
                        <li value={item}>
                            {item}
                            <button type="submit" onClick={handleRemove}>Eliminar item</button>
                        </li>
                    ))
                }
            </ul>
            <div>
                <div>
                    <input type="text" value={nuevaTarea}
                        onChange={(e) => setNuevaTarea(e.target.value)} />
                    <button type="button" onClick={handleAdd}>Añadir tarea</button>
                </div>
            </div>
        </div>
    );
}