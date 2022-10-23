import { useEffect, useRef, useState } from 'react'
import './styles.css'
import './w3.css'
import imagenes from './imagenes'
let color = "black"
let grosor = 1

export function limpiar_pizarra(){
  const canvasRef = document.getElementById('pizarra')
  console.log(canvasRef)

  const context = canvasRef.getContext("2d");
  context.fillStyle = "white";
  context.clearRect(0,0,canvasRef.width,canvasRef.height);
}

export function subir_imagen(){
  const canvasRef = document.getElementById('pizarra')
  
  const canvas = canvasRef;
  
  const context = canvas.getContext("2d");
  var img = new Image();
  img.src = imagenes[2].src;
  console.log(img)
  img.onload = function(){
    context.drawImage(img,0,0,canvas.width,canvas.height);
    console.log("intentaste subir la img")
  }
  
}

export function cambiar_color(element) {
  color = element
}

export function cambiar_grosor(element) {
  console.log(element)
  grosor = element
}

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1000;
    canvas.height = 1000;


    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineJoin = "round";
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.strokeStyle = color;
    contextRef.current.lineWidth = grosor;
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = ({ nativeEvent }) => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };



  return (
    <canvas className="canvas-container" id='pizarra'
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}>
    </canvas>
  )

}

export default DrawingCanvas