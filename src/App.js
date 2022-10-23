import React from "react";
import DrawingCanvas from "./DrawingCanvas";
import Barra_Herramientas from "./Barra_Herramientas";
import Barra_Colores from "./Barra_Colores"
import Barra_Grosor from "./Barra_Grosor";
import Barra_Funciones from "./Botones_Funciones";
import "./styles.css"
import "./w3.css"
import Subir_Imagen from "./Subir_Imagen";

function App() {
    return <div className="w3-container">
        <div className ="w3-col pizarra">
            <DrawingCanvas />
            <Barra_Herramientas />
            <Barra_Colores />
            <Barra_Grosor />
            <Barra_Funciones/>
            <Subir_Imagen/>
        </div>


    </div>

}

export default App