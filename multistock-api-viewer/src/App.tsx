import { useState } from 'react'
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import './App.css';

function App() {
  const [] = useState(0)

  return (
    <>
      <SwaggerUI url="/multistock-api-docs.yaml" />
      <div className="footer">
        <p>Hecho por Marcos, Kiara y Adolfo. Para nuestros compañeros del front-end.</p>
        <img src="/cat.gif" alt="cat-dance" />
      </div>
    </>
  )
}

export default App
