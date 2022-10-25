import React, { useState } from "react";
import DrawingCanvas from "./DrawingCanvas";
import Barra_Herramientas from "./Barra_Herramientas";
import Barra_Colores from "./Barra_Colores"
import Barra_Grosor from "./Barra_Grosor";
import Barra_Funciones from "./Barra_Funciones";
import "./styles.css"
import "./w3.css"
import Barra_Figuras from "./Barra_Figuras";


function App() {
    const [figura,setFigura] = useState("linea")
    const [colorAct,setColor] = useState("black")
    const [grosorAct,setGrosor] = useState(1)

    const cambiar_color = (element) =>{
        setColor(element.target.value)
    }

    const cambiar_grosor = (element) =>{
        setGrosor(element.target.value)
    }

    const cambiar_lapiz = () => {
        setFigura("linea")
        setColor("black")
    }

    const cambiar_borrador = () => {
        setFigura("linea")
        setColor("white")
    }

    const dibujarCuadrado = () => {
        setFigura("cuadrado")
    }

    const dibujarTriangulo = () => {
        setFigura("triangulo")
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
                color = {colorAct}
                grosor = {grosorAct}
                figura = {figura}
            />
            <Barra_Herramientas funcionPincel = {cambiar_lapiz} funcionBorrador = {cambiar_borrador}/>
            <Barra_Colores funcionColor = {cambiar_color}/>
            <Barra_Grosor funcionGrosor = {cambiar_grosor}/>

            <Barra_Funciones funcionLimpiar = {limpiar_pizarra}/>
            <Barra_Figuras funcionFiguraCuadrado = {dibujarCuadrado} funcionFiguraTriangulo = {dibujarTriangulo}/>

        </div>
    </div>

}

export default App