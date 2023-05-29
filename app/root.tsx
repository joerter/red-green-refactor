import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { LinksFunction, MetaFunction, json } from "@remix-run/node";
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

export const meta: MetaFunction = () => {
  return {
    title: "Red Green Refactor",
    ["og:image"]:
      "https://redgreenrefactor.nyc3.cdn.digitaloceanspaces.com/opengraph/redgreenrefactor.dev",
  };
};

export function loader() {
  return json({
    ENV: {
      STRAPI_URL_BASE: process.env.STRAPI_URL_BASE,
    },
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();

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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
