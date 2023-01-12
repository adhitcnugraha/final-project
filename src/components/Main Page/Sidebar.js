import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

function Sidebar({ topAnime, topManga }) {
  return (
    <Grid style={{ marginTop: 30, marginBottom: 30 }}>
      <Card style={{ borderRadius: 32, width: 400, height: 700 }}>
        <aside>
          <nav>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: 10,
                justifyContent: "",
              }}
            >
              <EmojiEventsOutlinedIcon
                style={{ margin: 10, display: "inline-block" }}
              />
              <h1
                style={{
                  marginRight: "10vh",
                  fontSize: 16,
                  fontFamily: "DM Sans",
                }}
              >
                Top Anime
              </h1>
              <Typography
                component={Link}
                to="/anime"
                style={{
                  marginLeft: "12vh",
                  fontSize: 16,
                  fontFamily: "DM Sans",
                  color: "black",
                  textTransform: "none",
                }}
              >
                View All
              </Typography>
            </div>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: 1,
                justifyContent: "",
              }}
            >
              <EmojiEventsOutlinedIcon
                style={{ margin: 10, display: "inline-block" }}
              />
              <h1
                style={{
                  marginRight: "12vh",
                  fontSize: 16,
                  fontFamily: "DM Sans",
                }}
              >
                Top Manga
              </h1>
              <h1
                style={{
                  marginLeft: "10vh",
                  fontSize: 16,
                  fontFamily: "DM Sans",
                }}
              >
                View All
              </h1>
            </div>
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
