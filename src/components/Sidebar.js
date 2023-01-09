import React from "react";
import { Card, Grid } from "@mui/material";

function Sidebar({ topAnime, topManga }) {
  return (
    <Grid>
      <Card style={{ borderRadius: 32 }}>
        <aside>
          <nav>
            <h1>Top Anime</h1>
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
