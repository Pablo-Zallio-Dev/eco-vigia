

import Login from "./components/Login/components/Login"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ContentApp from "./ContentApp"
import { useAuthStore } from "./store/useAuthStore"

const App = () => {

      const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

      return (
            <>
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to="/map" />} />
                              <Route path="/map" element={isAuthenticated ? <ContentApp /> : <Navigate to="/" />} />
                        </Routes>
                  </BrowserRouter>



            </>
      )
}

export default App