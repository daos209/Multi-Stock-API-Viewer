import { useState } from 'react'
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function App() {
  const [] = useState(0)

  return (
    <>
      <SwaggerUI url="/multistock-api-docs.yaml" />
    </>
  )
}

export default App
