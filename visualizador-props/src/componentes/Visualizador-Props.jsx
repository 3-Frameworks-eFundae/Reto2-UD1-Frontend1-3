import React from "react";

export default class VisualizadorProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaTareas: props.listaTareas,
            nuevaTarea: ''
        };
    }


    handleAdd(e) {
        e.preventDefault();
        const nuevaTarea = this.nuevaLista.value
        this.setState({
            listaTareas: [...this.state.listaTareas, nuevaTarea]
        });
    }

    handleDelete(itemABorrar) {
        const nuevaLista = this.state.listaTareas.filter(item => item !== itemABorrar )
        this.setState({
            listaTareas: [...nuevaLista]
        })
    }

    render() {
        return (
            <div>
                <h2>Lista de tareas</h2>
                {
                    this.state.listaTareas.map(item => (
                        <div>
                            <p key={item}>{item}</p>
                            <button type="submit" onClick={(e) => this.handleDelete(item)}>Eliminar item</button>
                        </div>
                    ))
                }
                <div>
                    <form onSubmit={(e) => this.handleAdd(e)}>
                        <label htmlFor="tarea">Nueva tarea</label>
                        <input type="text" ref={(input) => { this.nuevaLista = input }} />
                        <button type="submit">Añadir tarea</button>
                    </form>
                </div>
            </div >
        );
    };
}