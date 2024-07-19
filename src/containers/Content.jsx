import Demo from "./Demo"
import UnnamedPage from "./UnnamedPage"

import { Route, Routes } from "react-router"

import '../styles/content.css'

export default function Content() {
    return(
        <main className="content">
            <Routes>
                <Route path="/" element={<UnnamedPage />} />
                <Route path="demo" element={<Demo />} />
            </Routes>
        </main>
    )
}