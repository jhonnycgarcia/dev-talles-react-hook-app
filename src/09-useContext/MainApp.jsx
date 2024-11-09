import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"

export const MainApp = () => {
    return (
        <>
            <h1>Main App</h1>
            <hr />


            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                {/* <Route path="/*" element={<h1>404</h1>} /> */}
                <Route path="/*" element={<Navigate to="/about" replace />}/>
            </Routes>
        </>
    )
}
