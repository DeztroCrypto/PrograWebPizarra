import Boton_Figura from "./Boton_Figura"
import imagenes from "./imagenes"
const Barra_Figuras = (props) => {
    return (
        <>
        <Boton_Figura src={imagenes[3].src} alt={imagenes[3].titulo} onClick = {props.funcionFiguraCuadrado}/>
        <Boton_Figura src={imagenes[4].src} alt={imagenes[4].titulo} onClick = {props.funcionFiguraTriangulo}/>
        <Boton_Figura src={imagenes[5].src} alt={imagenes[5].titulo} onClick = {props.funcionFiguraCirculo}/>
        </>
    )

}

export default Barra_Figuras