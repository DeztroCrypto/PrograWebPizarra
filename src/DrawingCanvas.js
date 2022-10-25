import { useEffect, useRef, useState } from 'react'
import './styles.css'
import './w3.css'
let img = new Image()
export function subir_imagen() {
  const file = document.querySelector('input[type=file]').files[0]
  const canvas = document.getElementById('pizarra')
  const context = canvas.getContext('2d')
  
  img.src = URL.createObjectURL(file)
   
  img.onload = () => {
      
    context.drawImage(img,0,0) 
    }
    console.log(img)
  
}


const DrawingCanvas = (props) => {
  let color = props.color
  let grosor = props.grosor
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