import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import './App.css'
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { useSelector } from "react-redux"

function App() {
  const user = useSelector((state: any) => state.user)
  console.log(user.isLogging)
  const userIsLogging = user.isLogging;
  return (
    <BrowserRouter>
      <Routes >
        <Route
          path="/login"
          element={!userIsLogging ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/"
          element={userIsLogging ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={userIsLogging ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>

  )
}

export default App
