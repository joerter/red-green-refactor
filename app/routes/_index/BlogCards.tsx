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
import { Link as RemixLink } from "@remix-run/react";
import { formatDateString as formatDateString } from "~/date";
import { Post } from "@prisma/client";

export interface BlogCardsProps {
  posts: Post[];
}

export default function BlogCards(props: BlogCardsProps) {
  return (
    <Grid2 container spacing={2}>
      {props.posts.map((p, i) => {
        const published = formatDateString(p.published);
        const excerpt = `${p.excerpt.substring(0, 150)}...`;
        const url = `/posts/${p.slug}`;

        return (
          <Grid2 key={i} xs={12} sm={6} md={4}>
            <Card raised>
              <CardActionArea sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={`/posts/thumb/${p.slug}.jpeg`}
                ></CardMedia>
                <Link
                  prefetch="intent"
                  component={RemixLink}
                  to={url}
                  sx={{
                    position: "absolute",
                    inset: 0,
                  }}
                />
              </CardActionArea>
              <CardHeader
                sx={{ minHeight: 125, alignItems: "flex-start" }}
                title={p.title}
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
                  prefetch="intent"
                  to={url}
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
