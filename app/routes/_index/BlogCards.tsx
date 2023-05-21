import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Blog } from "~/models/blog.server";
import { Link as RemixLink } from "@remix-run/react";
import { strapiBaseUrl } from "~/strapi";

export interface BlogCardsProps {
  blogs: Blog[];
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

export default function BlogCards(props: BlogCardsProps) {
  return (
    <Grid2 container spacing={2}>
      {props.blogs.map((b, i) => {
        const published = dateFormatter.format(
          new Date(b.attributes.Published)
        );
        const excerpt = `${b.attributes.Excerpt.substring(0, 150)}...`;

        return (
          <Grid2 key={i} xs={12} sm={6} md={4}>
            <Card raised>
              <CardActionArea sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={`${strapiBaseUrl()}${
                    b.attributes.Hero.data.attributes.formats.small.url
                  }`}
                ></CardMedia>
                <Link
                  component={RemixLink}
                  to="/posts/john"
                  sx={{
                    position: "absolute",
                    inset: 0,
                  }}
                />
              </CardActionArea>
              <CardHeader
                sx={{ minHeight: 125, alignItems: "flex-start" }}
                title={b.attributes.Title}
                subheader={published}
                titleTypographyProps={{ sx: { fontWeight: "bold" } }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    minHeight: 50,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {excerpt}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  type="button"
                  size="small"
                  variant="text"
                  color="secondary"
                  component={RemixLink}
                  to="/posts/john"
                  sx={{ fontWeight: "bold" }}
                >
                  Read more <ArrowForwardIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        );
      })}
    </Grid2>
  );
}
