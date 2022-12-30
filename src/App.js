import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import MainContent from "./components/MainContent.js";

const animeAPI = "https://api.jikan.moe/v4/top/anime";
const mangaAPI = "https://api.jikan.moe/v4/top/manga";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [topManga, SetTopManga] = useState([]);
  const [search, SetSearch] = useState("");

  // Anime
  useEffect(() => {
    const GetTopAnime = async () => {
      const result = await fetch(animeAPI);
      result.json().then((json) => {
        SetTopAnime(json.data.slice(0, 5));
      });
    };
    GetTopAnime();
  }, []);

  // Manga
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
  };
  const getAnime = async (query) => {
    const searchAnimeResult = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&rating=g&limit=30`
    );
    searchAnimeResult.json().then((json) => {
      SetAnimeList(json.data);
      console.log(animeList);
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} topManga={topManga} />
        <MainContent
          handleSearch={handleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
