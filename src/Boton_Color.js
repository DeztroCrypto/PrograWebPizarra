import {cambiar_color} from "./DrawingCanvas"

const Boton_Color = (props) =>{

    return (
        <button className={props.className} onClick={() => cambiar_color(props.value)}  ></button>
    )
}

export default Boton_Color