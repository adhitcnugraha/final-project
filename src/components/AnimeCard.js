import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "typeface-dm-sans";
// import { Link } from "react-router-dom";

{
  /* <article className="anime-card">
        <a href={anime.url} target="_blank" rel="noreferrer">
          <figure>
            <img src={anime.images.jpg.image_url} alt="Anime Image" />
          </figure>
          <h3>{anime.title}</h3>
        </a>
      </article> */
}

{
  /* Awasin */
}

{
  /* <article className="manga-card">
        <a href={manga.url} target="_blank" rel="noreferrer">
          <figure>
            <img src={manga.images.jpg.image_url} alt="Manga Image" />
          </figure>
        </a>
      </article> */
}

function AnimeCard({ anime }) {
  return (
    <Grid>
      <Card sx={{ width: 345 }} style={{ borderRadius: 38, margin: 30 }}>
        <CardActionArea link={anime.url}>
          <CardMedia
            component="img"
            height="343"
            maxWidth="350px"
            style={{
              borderRadius: 50,
              paddingTop: 30,
              paddingRight: 30,
              paddingLeft: 30,
            }}
            image={anime.images.jpg.image_url}
            alt="Anime Image"
          />
          <CardContent style={{ height: "250px" }}>
            <Typography
              variant="h6"
              key={anime.genres}
              style={{
                color: "#FF0F0F",
                fontFamily: "DM Sans",
                fontSize: 14,
                display: " flex",
                flexWrap: "wrap",
              }}
            >
              {[
                anime.genres.map((genre) => (
                  <h3 style={{ flex: "0 0 auto", margin: "15px 30px 0 0" }}>
                    {genre.name}
                  </h3>
                )),
              ]}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <a
                href={anime.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#0E0E0E" }}
              >
                <h3 style={{ fontFamily: "DM Sans", color: "#0E0E0E" }}>
                  {anime.title}
                </h3>
              </a>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button>
            <FavoriteIcon />
          </Button>
          <Button style={{ margin: "0 0 0 22vh" }}>
            <BookmarkBorderIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default AnimeCard;
