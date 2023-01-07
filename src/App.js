import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import MainContent from "./components/MainContent.js";
import Navbar from "./components/Navbar.js";

const animeAPI = "https://api.jikan.moe/v4/top/anime";
const mangaAPI = "https://api.jikan.moe/v4/top/manga";

function App() {
  const [mangaList, SetMangaList] = useState([]);
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [topManga, SetTopManga] = useState([]);
  const [search, SetSearch] = useState("");

  // useEffect Anime
  useEffect(() => {
    const GetTopAnime = async () => {
      const result = await fetch(animeAPI);
      result.json().then((json) => {
        SetTopAnime(json.data.slice(0, 5));
      });
    };
    GetTopAnime();
  }, []);

  // useEffect Manga
  useEffect(() => {
    const GetTopManga = async (query) => {
      const mangaResult = await fetch(mangaAPI);
      mangaResult.json().then((json) => {
        SetTopManga(json.data.slice(0, 5));
        // console.log(topManga);
      });
    };
    GetTopManga();
  }, []);

  // Search Anime
  const handleSearch = (e) => {
    e.preventDefault();
    getAnime(search);
    getManga(search);
  };

  // Search get Anime
  const getAnime = async (query) => {
    // Get Anime
    try {
      const searchAnimeResult = await fetch(
        `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&rating=pg13&limit=30`
      );

      searchAnimeResult.json().then((json) => {
        SetAnimeList(json.data);
        console.log(animeList);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // Search get Manga
  const getManga = async (query) => {
    // Get Manga
    try {
      const searchMangaResult = await fetch(
        `https://api.jikan.moe/v4/manga?q=${query}&order_by=title&sort=asc`
      );
      searchMangaResult.json().then((json) => {
        SetMangaList(json.data);
        console.log(mangaList);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} topManga={topManga} />
        <MainContent
          handleSearch={handleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
          mangaList={mangaList}
        />
      </div>
    </div>
  );
}

export default App;
