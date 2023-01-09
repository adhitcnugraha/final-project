import React from "react";
import { Card, Grid } from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

function Sidebar({ topAnime, topManga }) {
  return (
    <Grid style={{ marginTop: 30, marginBottom: 30 }}>
      <Card style={{ borderRadius: 32, width: 400, height: 700 }}>
        <aside>
          <nav>
            <EmojiEventsOutlinedIcon /> <h1>Top Anime</h1>
            {topAnime.map((anime) => (
              <a
                href={anime.url}
                target="_blank"
                key={anime.mal_id}
                rel="noreferrer"
              >
                {anime.title}
              </a>
            ))}
            <h1>Top Manga</h1>
            {topManga.map((manga) => (
              <a
                href={manga.url}
                target="_blank"
                key={manga.mal_id}
                rel="noreferrer"
              >
                {manga.title}
              </a>
            ))}
          </nav>
        </aside>
      </Card>
    </Grid>
  );
}

export default Sidebar;
