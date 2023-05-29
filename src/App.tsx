import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Home, Login } from "./pages";
import './App.css'
import { useAppSelector } from "./store/store";

function App() {
  const user = useAppSelector((state) => state.user)

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
