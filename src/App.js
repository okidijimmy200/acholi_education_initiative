import React from "react"
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from "./pages/MainRoutes"

function App() {
    return <div className="bg-white p-[2rem]">
        <BrowserRouter>
            <MainRoutes />
        </BrowserRouter>
        
    </div>
}

export default App