
const Boton_Opcion = (props) => {
    return(
        <button class="w3-button w3-margin-left w3-border w3-round-large w3-indigo"
        onClick={props.funcion}>{props.nombre}</button>
    )
}

export default Boton_Opcion