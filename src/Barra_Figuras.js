import Boton_Figura from "./Boton_Figura"
import imagenes from "./imagenes"
const Barra_Figuras = (props) => {
    return (
        <>
        <Boton_Figura src={imagenes[3].src} alt={imagenes[3].alt} />
        <Boton_Figura src={imagenes[4].src} alt={imagenes[4].alt} />
        </>
    )

}

export default Barra_Figuras