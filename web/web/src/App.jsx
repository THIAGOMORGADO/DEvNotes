import "./App.css"

import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes/routes"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}
