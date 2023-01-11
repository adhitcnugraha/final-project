import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login.js";
import Homepage from "./components/Homepage.js";
import AnimePage from "./components/Anime/AnimePage.js";
import MangaPage from "./components/Manga/MangaPage.js";
import BookmarkPage from "./components/Bookmark/BookmarkPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/manga" element={<MangaPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
