

import Login from "./components/Login/components/Login"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ContentApp from "./ContentApp"
import { useAuthStore } from "./store/useAuthStore"
import Register from "./components/Login/components/Register"

const App = () => {

      const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

      return (
            <>
                  <BrowserRouter>
                        <Routes>
                              {/* Si está logueado, mandamos al mapa. Si no, al Login */}
                              <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to="/map" />} />

                              {/* La nueva ruta de registro, accesible solo si NO está logueado */}
                              <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/map" />} />

                              {/* Ruta protegida: Solo si está logueado puede ver el contenido */}
                              <Route path="/map" element={isAuthenticated ? <ContentApp /> : <Navigate to="/" />} />

                              {/* Comodín: Si escribe cualquier otra cosa, lo mandamos al inicio */}
                              <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                  </BrowserRouter>



            </>
      )
}

export default App