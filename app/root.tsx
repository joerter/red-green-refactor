import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { Footer, Navbar } from "./routes/layout";
import { Container, Stack } from "@mui/material";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&Lato:300,400,500,700&display=swa",
    },
  ];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Red Green Refactor Blog" },
    { name: "description", content: "Red Green Refactor by John Oerter" },
    {
      property: "og:description",
      content: "Red Green Refactor Blog by John Oerter",
    },
    {
      property: "og:image",
      content:
        "https://redgreenrefactor.nyc3.cdn.digitaloceanspaces.com/opengraph/redgreenrefactor.dev",
    },
    { property: "og:type", content: "image/png" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Stack sx={{ minHeight: "100vh" }}>
          <Navbar />
          <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>
            <Outlet />
          </Container>
          <Footer />
        </Stack>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
