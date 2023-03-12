import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import MyVocabulary from "./pages/MyVocabulary";
import Profile from "./pages/Profile";
import CardsProvider from "./context/CardsContext";
import MyGame from "./pages/MyGame";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CardsProvider>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/vocabulary" element={<MyVocabulary />} />
          <Route path="/game" element={<MyGame />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </CardsProvider>
    </BrowserRouter>
  );
}

export default App;
