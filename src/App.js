import React, { useState } from "react";
import DrawingCanvas from "./DrawingCanvas";
import Barra_Herramientas from "./Barra_Herramientas";
import Barra_Colores from "./Barra_Colores"
import Barra_Grosor from "./Barra_Grosor";
import Barra_Funciones from "./Barra_Funciones";
import "./styles.css"
import "./w3.css"
import Subir_Imagen from "./Subir_Imagen";
import Barra_Figuras from "./Barra_Figuras";


function App() {
    const [figuraCuadrado,setCuadrado] = useState(false)
    const [colorAct,setColor] = useState("black")
    const [grosorAct,setGrosor] = useState(1)

    const cambiar_color = (element) =>{
        setColor(element.target.value)
    }

    const cambiar_grosor = (element) =>{
        setGrosor(element.target.value)
    }

    const cambiar_lapiz = () => {
        setCuadrado(false)
        setColor("black")
    }

    const cambiar_borrador = () => {
        setCuadrado(false)
        setColor("white")
    }

    const limpiar_pizarra = () => {
        const canvas = document.getElementById('pizarra')
        const context = canvas.getContext("2d");
        context.fillStyle = "white";
        context.clearRect(0, 0, canvas.width, canvas.height);
      }

    return <div className="w3-container">
        <div className ="w3-col pizarra">
            <DrawingCanvas 
                figuraCuadrado={figuraCuadrado}
                color = {colorAct}
                grosor = {grosorAct}
            />
            <Barra_Herramientas funcionPincel = {cambiar_lapiz} funcionBorrador = {cambiar_borrador}/>
            <Barra_Colores funcionColor = {cambiar_color}/>
            <Barra_Grosor funcionGrosor = {cambiar_grosor}/>
            <Barra_Funciones funcionLimpiar = {limpiar_pizarra}/>
            <Barra_Figuras/>
            <Subir_Imagen/>
        </div>


    </div>

}

export default App